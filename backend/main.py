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
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JsonFormatter(BaseModel):
    json: str

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
          raise HTTPException(status_code=404, detail="Error while formating JSON ❌")

@app.post("/api/url-encoding")
async def url_encoding():
    pass 

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

