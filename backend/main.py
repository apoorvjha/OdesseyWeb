from fastapi import FastAPI
import uvicorn
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from pydantic import BaseModel

load_dotenv()

# instantiate the application
app = FastAPI()

# Food search request model
class FoodSearchRequest(BaseModel):
    query: str
    is_veg: bool = None
    course: str = None
    cuisine: str = None

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/get_cuisines")
async def get_cuisines():
    mongo_uri = os.getenv("MONGO_URI")
    db_name = os.getenv("DB_NAME")
    client = MongoClient(mongo_uri)
    db = client[db_name]
    collection = db["cuisines"]
    cusines = []
    for item in collection.find():
        cusines.append({
            "id" : str(item["_id"]),
            "name" : str(item["name"]).replace("Recipe", "").strip(),
            "image_url" : str(item["image_url"]),
            "description" : str(item["description"]),
            "course" : str(item["course"]),
            "diet" : str(item["diet"])
        })
    return {"cuisines": cusines}

@app.post("/get_food_search")
async def food_search(request: FoodSearchRequest):
    mongo_uri = os.getenv("MONGO_URI")
    db_name = os.getenv("DB_NAME")
    client = MongoClient(mongo_uri)
    db = client[db_name]
    collection = db["cuisines"]
    cusines = []
    for item in collection.find():
        if request.query.lower() in item["name"].lower():
            if request.is_veg is not None:
                if request.is_veg and item["diet"].lower() != "vegetarian" and item["diet"].lower() != "vegan" and item["diet"].lower() != "sattvic":
                    continue
                if not request.is_veg and item["diet"].lower() == "vegetarian":
                    continue
            if request.course and request.course.lower() not in item["course"].lower():
                continue
            if request.cuisine and request.cuisine.lower() not in item["cuisine"].lower():
                continue
            cusines.append({
                "id" : str(item["_id"]),
                "name" : str(item["name"]).replace("Recipe", "").strip(),
                "image_url" : str(item["image_url"]),
                "description" : str(item["description"]),
                "course" : str(item["course"]),
                "diet" : str(item["diet"])
            })
    return {"cuisines": cusines}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)