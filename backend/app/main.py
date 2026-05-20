from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from loguru import logger
import sys
import time

logger.remove()

logger.add(
    sys.stdout,
    format="<green>{time}</green> | "
           "<level>{level}</level> | "
           "<cyan>{message}</cyan>",
    level="INFO"
)

logger.add(
    "backend.log",
    rotation="10 MB",
    retention="7 days",
    level="INFO"
)

app = FastAPI(
    title="GestureMind AI Backend",
    description="Realtime AI Sign Language Translation Backend",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():

    logger.info("GestureMind Backend Starting...")

    start_time = time.strftime("%Y-%m-%d %H:%M:%S")

    logger.info(f"Server Started At: {start_time}")

    logger.info("FastAPI Backend Running")


@app.on_event("shutdown")
async def shutdown_event():

    logger.warning("GestureMind Backend Shutting Down...")

    shutdown_time = time.strftime("%Y-%m-%d %H:%M:%S")

    logger.warning(f"Server Shutdown At: {shutdown_time}")


@app.get("/")
async def root():

    logger.info("Root Endpoint Accessed")

    return {
        "message": "GestureMind AI Backend Running",
        "status": "success"
    }


@app.get("/health")
async def health_check():

    logger.info("Health Check Endpoint Accessed")

    return {
        "status": "healthy",
        "server": "running"
    }


@app.get("/info")
async def info():

    logger.info("Info Endpoint Accessed")

    return {
        "project": "GestureMind AI",
        "version": "1.0.0",
        "framework": "FastAPI"
    }


@app.get("/test")
async def test():

    logger.success("Test Endpoint Working")

    return {
        "message": "Backend Working Successfully"
    }


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):

    await websocket.accept()

    logger.success("WebSocket Connected")

    try:
        while True:

            data = await websocket.receive_text()

            logger.info(f"Received Data: {data}")

            await websocket.send_text("Frame Received")

    except WebSocketDisconnect:

        logger.warning("WebSocket Disconnected")