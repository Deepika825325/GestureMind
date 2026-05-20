"use client";

import { useEffect, useRef, useState } from "react";

export default function useGestureStream() {

  const ws = useRef<WebSocket | null>(null);

  const [landmarks, setLandmarks] =
    useState<any[]>([]);

  useEffect(() => {

    ws.current = new WebSocket(
      "ws://127.0.0.1:8000/ws"
    );

    ws.current.onopen = () => {
      console.log("Gesture Stream Connected");
    };

    ws.current.onmessage = (event) => {

      const data = JSON.parse(event.data);

      if (data.landmarks) {
        setLandmarks(data.landmarks);
      }

    };

    return () => {
      ws.current?.close();
    };

  }, []);

  const sendFrame = (frame: string) => {

    if (
      ws.current &&
      ws.current.readyState === WebSocket.OPEN
    ) {

      ws.current.send(
        JSON.stringify({
          frame,
        })
      );

    }

  };

  return {
    sendFrame,
    landmarks,
  };
}