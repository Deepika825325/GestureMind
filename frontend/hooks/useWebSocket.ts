"use client";

import { useEffect, useState } from "react";

export default function useWebSocket() {

  const [connected, setConnected] =
    useState(false);

  useEffect(() => {

    const ws = new WebSocket(
      "ws://127.0.0.1:8000/ws"
    );

    ws.onopen = () => {

      console.log("Connected");

      setConnected(true);
    };

    ws.onclose = () => {

      console.log("Disconnected");

      setConnected(false);
    };

    ws.onmessage = (event) => {

      console.log(event.data);
    };

    return () => {

      ws.close();
    };

  }, []);

  return {
    connected,
  };
}