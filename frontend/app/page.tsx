"use client";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

import CameraFeed from "@/components/camera/CameraFeed";

import ConnectionStatus from "@/components/websocket/ConnectionStatus";

import TranslationCard from "@/components/translation/TranslationCard";

import useWebSocket from "@/hooks/useWebSocket";

export default function HomePage() {

  const { connected } = useWebSocket();

  return (

    <div className="flex min-h-screen bg-[#050816] text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* DASHBOARD CONTENT */}
        <div className="p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="xl:col-span-2 flex flex-col gap-6">

            {/* STATUS */}
            <ConnectionStatus connected={connected} />

            {/* CAMERA */}
            <CameraFeed />

          </div>

          {/* RIGHT SIDE */}
          <div>

            <TranslationCard />

          </div>

        </div>

      </main>

    </div>

  );
}