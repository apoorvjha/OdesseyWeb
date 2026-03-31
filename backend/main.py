from fastapi import FastAPI, logger
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from pydantic import BaseModel
from utility import *

# instantiate the application
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Food search request model
class FoodSearchRequest(BaseModel):
    query: str = None
    diet: str = None
    course: str = None
    cuisine: str = None

class RestrauntSearchRequest(BaseModel):
    query: str = None

class ReverseGeocodeRequest(BaseModel):
    lat: float
    lng: float

class AutocompleteRequest(BaseModel):
    input: str

class GeocodeRequest(BaseModel):
    address: str

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/get_cuisines")
async def get_cuisines():
    collection = get_mongo_collection("cuisines")
    if collection is None:
        return {"cuisines": []}
    cusines = []
    for item in collection.find():
        cusines.append({
            "id" : str(item["_id"]),
            "name" : str(item["name"]).replace("Recipe", "").strip(),
            "image_url" : str(item["image_url"]),
            "description" : str(item["description"]),
            "course" : str(item["course"]),
            "diet" : str(item["diet"]),
            "cuisine" : str(item["cuisine"]),
            "ingredients" : str(item["ingredients"]),
            "instructions" : str(item["instructions"])
        })
    return {"cuisines": cusines}

@app.post("/get_food_search")
async def food_search(request: FoodSearchRequest):
    collection = get_mongo_collection("cuisines")
    if collection is None:
        return {"cuisines": []}
    cusines = []
    for item in collection.find():
        if string_match_score(request.query, item["name"]) >= 0.6 or request.query is None:
            if request.diet is not None:
                if request.diet.lower().strip() != item["diet"].lower().strip():
                    continue
            if request.course is not None:
                if request.course.lower().strip() != item["course"].lower().strip():
                    continue
            if request.cuisine is not None:
                if string_match_score(request.cuisine, item["cuisine"]) < 0.6:
                    continue
            cusines.append({
                "id" : str(item["_id"]),
                "name" : str(item["name"]).replace("Recipe", "").strip(),
                "image_url" : str(item["image_url"]),
                "description" : str(item["description"]),
                "course" : str(item["course"]),
                "diet" : str(item["diet"]),
                "cuisine" : str(item["cuisine"]),
                "ingredients" : str(item["ingredients"]),
                "instructions" : str(item["instructions"])
            })
    return {"cuisines": cusines}

@app.post("/get_restraunts")
async def get_restraunts(request: RestrauntSearchRequest):

    collection = get_mongo_collection("restraunts")
    query = request.query.lower().strip()
    restraunts = []

    if collection.count_documents({}) == 0:

        response = request_ola_maps_api(query)

        if response.status_code == 200:
            data = response.json()

            for item in data.get("predictions", []):

                restraunt_data = {
                    "place_id": str(item.get("place_id", "")),
                    "name": str(item.get("name", "")),
                    "formatted_address": str(item.get("formatted_address", "")),
                    "lat": float(item.get("geometry", {}).get("location", {}).get("lat", 0.0)),
                    "lng": float(item.get("geometry", {}).get("location", {}).get("lng", 0.0)),
                    "query": str(query)
                }

                restraunts.append(restraunt_data)
                collection.insert_one(restraunt_data)

            return {"results": restraunts}

        else:
            print(f"Error fetching data from OLA Maps API: {response.status_code}")
            return {"results": []}

    else:

        for item in collection.find({}, {"_id": 0}):

            if string_match_score(query, item.get("query", "")) >= 0.9:

                restraunt_data = {
                    "place_id": str(item.get("place_id", "")),
                    "name": str(item.get("name", "")),
                    "formatted_address": str(item.get("formatted_address", "")),
                    "lat": float(item.get("lat", 0.0)),
                    "lng": float(item.get("lng", 0.0))
                }

                restraunts.append(restraunt_data)

        if len(restraunts) == 0:

            response = request_ola_maps_api(query)

            if response.status_code == 200:
                data = response.json()

                for item in data.get("predictions", []):

                    restraunt_data = {
                        "place_id": str(item.get("place_id", "")),
                        "name": str(item.get("name", "")),
                        "formatted_address": str(item.get("formatted_address", "")),
                        "lat": float(item.get("geometry", {}).get("location", {}).get("lat", 0.0)),
                        "lng": float(item.get("geometry", {}).get("location", {}).get("lng", 0.0)),
                        "query": str(query)
                    }

                    restraunts.append(restraunt_data)
                    collection.insert_one(restraunt_data)

        return {"results": restraunts}



@app.post("/reverse_geocode")
async def reverse_geocode(request: ReverseGeocodeRequest):
    response = request_ola_maps_reverse_geocode(request.lat, request.lng)
    if response.status_code == 200:
        data = response.json()
        if data.get("results") and len(data["results"]) > 0:
            return {"formatted_address": data["results"][0].get("formatted_address", "")}
    return {"formatted_address": ""}


@app.post("/autocomplete")
async def autocomplete(request: AutocompleteRequest):
    response = request_ola_maps_autocomplete(request.input)
    if response.status_code == 200:
        data = response.json()
        predictions = [
            {"description": p.get("description", "")}
            for p in data.get("predictions", [])
        ]
        return {"predictions": predictions}
    return {"predictions": []}


@app.post("/geocode")
async def geocode(request: GeocodeRequest):
    response = request_ola_maps_geocode(request.address)
    if response.status_code == 200:
        data = response.json()
        results = data.get("geocodingResults", [])
        if results:
            result = results[0]
            location = result.get("geometry", {}).get("location", {})
            return {
                "lat": location.get("lat"),
                "lng": location.get("lng"),
                "name": result.get("name", ""),
                "formatted_address": result.get("formatted_address", "")
            }
    return None



if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
