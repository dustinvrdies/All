# Entry point
from fastapi import FastAPI
app = FastAPI()

@app.get('/')
def read_root():
    return {'message': 'DAH Assistant is live'}