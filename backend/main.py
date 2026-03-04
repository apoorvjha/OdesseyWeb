from fastapi import FastAPI
import uvicorn
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from pydantic import BaseModel
from utility import *

load_dotenv()

#TODO:
## 1. String matching for food search - use fuzzy matching or regex to improve search results -> Done
## 2. Combine below dataset and create a new collection
### a. https://www.kaggle.com/datasets/abhijitdahatonde/swiggy-restuarant-dataset
### b. https://www.kaggle.com/datasets/ronidas39/zomato-india-data-set
## 3. add cuisine, ingredients and instructions to the collection and return it in the response. -> Done
## 4. Instead of is_veg as boolean, use diet as string and allow users to search for specific diets like vegan, vegetarian, non-vegetarian, sattvic etc. -> Done

# instantiate the application
app = FastAPI()

# Food search request model
class FoodSearchRequest(BaseModel):
    query: str = None
    diet: str = None
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
            "diet" : str(item["diet"]),
            "cuisine" : str(item["cuisine"]),
            "ingredients" : str(item["ingredients"]),
            "instructions" : str(item["instructions"])
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


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)