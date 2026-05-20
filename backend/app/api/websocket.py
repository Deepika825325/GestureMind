from fastapi import APIRouter, WebSocket

import json

from app.services.frame_processor import (
    decode_base64_image,
)

from app.services.mediapipe_service import (
    detect_hand_landmarks,
)

router = APIRouter()


@router.websocket("/ws")
async def websocket_endpoint(
    websocket: WebSocket
):

    await websocket.accept()

    print("Client Connected")

    try:

        while True:

            data = await websocket.receive_text()

            parsed_data = json.loads(data)

            frame_data = parsed_data.get("frame")

            frame = decode_base64_image(
                frame_data
            )

            landmarks = detect_hand_landmarks(
                frame
            )

            await websocket.send_text(
                json.dumps({
                    "landmarks": landmarks
                })
            )

    except Exception as e:

        print(e)

        print("Client Disconnected")