"use client";

import Webcam from "react-webcam";

import { useEffect, useRef } from "react";

import LandmarkOverlay from "./LandmarkOverlay";

import useGestureStream from "@/hooks/useGestureStream";

export default function CameraFeed() {

  const webcamRef = useRef<Webcam>(null);

  const {
    sendFrame,
    landmarks,
  } = useGestureStream();

  useEffect(() => {

    const interval = setInterval(() => {

      if (webcamRef.current) {

        const screenshot =
          webcamRef.current.getScreenshot();

        if (screenshot) {

          sendFrame(screenshot);

        }

      }

    }, 100);

    return () => clearInterval(interval);

  }, [sendFrame]);

  return (

    <div className="relative bg-[#0f172a] border border-gray-800 rounded-3xl p-5 shadow-2xl">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-semibold">
          Live Camera Feed
        </h2>

        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
          LIVE
        </div>

      </div>

      <div className="relative">

        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          screenshotFormat="image/jpeg"
          className="rounded-2xl w-full"
        />

        <LandmarkOverlay
          landmarks={landmarks}
        />

      </div>

    </div>
  );
}