export default function Navbar() {

  return (

    <nav className="h-20 border-b border-gray-800 bg-[#0b1120] flex items-center justify-between px-8">

      <div>

        <h1 className="text-3xl font-bold">
          GestureMind AI
        </h1>

        <p className="text-sm text-gray-400">
          Realtime Sign Language Translator
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

        <span className="text-gray-300">
          System Online
        </span>

      </div>

    </nav>
  );
}