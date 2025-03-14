from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import hashlib
import uuid
import logging
import yaml
import base64


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

class YamlToJson(BaseModel):
    yaml: str 

class HashGenerator(BaseModel):
    text: str
    algorithm: str 

# SERVER Running 
@app.get("/")
def read_root():
    return {"message": "Dev Utilities API is running 🚀"}

# JSON Formatter 
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



# UUID Generator 
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


# YAML to JSON Converter 
@app.post("/api/yaml-to-json")
async def yaml_to_json(yaml_data: YamlToJson):

    try:
        parsed_yaml = yaml.safe_load(yaml_data.yaml)
        converted_yaml_to_json = json.dumps(parsed_yaml, indent=2)
        print(converted_yaml_to_json)
        return {
            "message": "converted", 
            "formatted": converted_yaml_to_json
        }
    
    except Exception as e:
        logger.error(f"Error while parsing YAML: {str(e)}")
        raise HTTPException(status_code=400, detail="Error while formatting YAML to JSON")



# Hash Generator 
@app.post("/api/hash-generator")
async def hash_generator(hash_data: HashGenerator):
    try:
        text_bytes = hash_data.text.encode("utf-8")

        if hash_data.algorithm.upper() == "MD5":
            hash_object = hashlib.md5(text_bytes)
        if hash_data.algorithm.upper() == "SHA-1":
            hash_object = hashlib.sha1(text_bytes)
        if hash_data.algorithm.upper() == "SHA-256":
            hash_object = hashlib.sha256(text_bytes)
        if hash_data.algorithm.upper() == "SHA-512":
            hash_object = hashlib.sha3_512(text_bytes)
        return {
            "hash": hash_object.hexdigest()
        } 
    except Exception as e:
        logger.error(f"Error while generating Hash: {str(e)}")
        raise HTTPException(status_code=400, detail="Error while generating Hash.")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

