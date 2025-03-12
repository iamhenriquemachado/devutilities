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

app = FastAPI(title="Dev Utilities API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class JsonRequest(BaseModel):
    json: str

class Base64Request(BaseModel):
    text: str
    action: str  # "encode" or "decode"

class UrlRequest(BaseModel):
    text: str
    action: str  # "encode" or "decode"

class HashRequest(BaseModel):
    text: str
    algorithm: str  # "md5", "sha1", "sha256", etc.

class ColorRequest(BaseModel):
    color: str
    from_format: str
    to_format: str

class JwtRequest(BaseModel):
    token: str
    secret: Optional[str] = None

# Routes
@app.get("/")
def read_root():
    return {"message": "Dev Utilities API is running"}

@app.post("/api/format-json")
def format_json(request: JsonRequest):
    try:
        # Parse the JSON string
        parsed_json = json.loads(request.json)
        # Format it with indentation
        formatted_json = json.dumps(parsed_json, indent=2)
        return {"formatted": formatted_json}
    except json.JSONDecodeError as e:
        raise HTTPException(status_code=400, detail=f"Invalid JSON: {str(e)}")

@app.post("/api/base64")
def base64_convert(request: Base64Request):
    try:
        if request.action == "encode":
            encoded = base64.b64encode(request.text.encode()).decode()
            return {"result": encoded}
        elif request.action == "decode":
            decoded = base64.b64decode(request.text.encode()).decode()
            return {"result": decoded}
        else:
            raise HTTPException(status_code=400, detail="Invalid action. Use 'encode' or 'decode'")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/url")
def url_convert(request: UrlRequest):
    try:
        if request.action == "encode":
            encoded = quote(request.text)
            return {"result": encoded}
        elif request.action == "decode":
            decoded = unquote(request.text)
            return {"result": decoded}
        else:
            raise HTTPException(status_code=400, detail="Invalid action. Use 'encode' or 'decode'")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/hash")
def generate_hash(request: HashRequest):
    try:
        text_bytes = request.text.encode()
        
        if request.algorithm == "md5":
            hash_result = hashlib.md5(text_bytes).hexdigest()
        elif request.algorithm == "sha1":
            hash_result = hashlib.sha1(text_bytes).hexdigest()
        elif request.algorithm == "sha256":
            hash_result = hashlib.sha256(text_bytes).hexdigest()
        elif request.algorithm == "sha512":
            hash_result = hashlib.sha512(text_bytes).hexdigest()
        else:
            raise HTTPException(status_code=400, detail=f"Unsupported algorithm: {request.algorithm}")
            
        return {"result": hash_result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/uuid")
def generate_uuid():
    return {"result": str(uuid.uuid4())}

@app.post("/api/jwt/decode")
def decode_jwt(request: JwtRequest):
    try:
        # First try to decode without verification
        header = jwt.get_unverified_header(request.token)
        
        # Decode payload without verification
        decoded = jwt.decode(request.token, options={"verify_signature": False})
        
        # If secret is provided, try to verify
        verified = False
        if request.secret:
            try:
                jwt.decode(request.token, request.secret, algorithms=[header.get("alg", "HS256")])
                verified = True
            except:
                verified = False
                
        return {
            "header": header,
            "payload": decoded,
            "verified": verified
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

