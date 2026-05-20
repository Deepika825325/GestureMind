type Props = {
  connected: boolean;
};

export default function ConnectionStatus({
  connected,
}: Props) {

  return (

    <div
      className={`w-fit px-5 py-3 rounded-2xl font-semibold shadow-lg ${
        connected
          ? "bg-green-500/20 text-green-400 border border-green-500"
          : "bg-red-500/20 text-red-400 border border-red-500"
      }`}
    >
      {connected
        ? "WebSocket Connected"
        : "WebSocket Disconnected"}
    </div>

  );
}