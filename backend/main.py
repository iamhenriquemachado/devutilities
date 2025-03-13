from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import base64
import hashlib
import uuid
from urllib.parse import quote, unquote
import jwt
from typing import Dict, Any, Optional
import logging

app = FastAPI(title="Dev Utilities API")
logger = logging.getLogger("uvicorn")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins, or specify the frontend domain (e.g., "http://localhost:3000")
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JsonFormatter(BaseModel):
    json: str

class UUIDGenerator(BaseModel):
    uuid: str

# Routes
@app.get("/")
def read_root():
    return {"message": "Dev Utilities API is running 🚀"}

# Route: JSON Formater 
@app.post("/api/format-json")
async def json_formatter(json_data: JsonFormatter):
    try:
        parsed_json = json.loads(json_data.json)
        formated_json = json.dumps(parsed_json, indent=2)
        return {
             "formatted": formated_json
        } 
    except Exception as e:
          logger.error(f"Error while parsing JSON: {str(e)}")
          raise HTTPException(status_code=404, detail="Error while formating JSON")

# Route UUID Generator
@app.get("/api/uuid-generator")
async def uuid_generator():
    try:
        uuid_generated = str(uuid.uuid4())
        print("uuid:", uuid_generated)

        return {
            "uuid": uuid_generated
        }
    except Exception as e:
          logger.error(f"Error while creating UUID: {str(e)}")
          raise HTTPException(status_code=404, detail="Error while creating UUID")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

