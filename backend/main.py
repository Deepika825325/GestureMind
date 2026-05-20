from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI(
    title="GestureMind AI Backend",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():

    return {
        "message": "GestureMind Backend Running",
        "status": "success"
    }

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):

    await websocket.accept()

    print("WebSocket Connected")

    try:

        while True:

            data = await websocket.receive_text()

            print("Received:", data)

            response = {
                "status": "success",
                "message": "Frame Received"
            }

            await websocket.send_text(
                json.dumps(response)
            )

    except WebSocketDisconnect:

        print("WebSocket Disconnected")