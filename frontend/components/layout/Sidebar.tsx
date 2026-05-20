export default function Sidebar() {

  const items = [
    "Dashboard",
    "Realtime Translate",
    "Analytics",
    "Settings",
    "Profile",
  ];

  return (

    <aside className="w-72 bg-[#0b1120] border-r border-gray-800 p-6 hidden lg:flex flex-col">

      <h1 className="text-4xl font-bold text-purple-500 mb-12">
        GestureMind
      </h1>

      <div className="space-y-4">

        {items.map((item) => (

          <div
            key={item}
            className="bg-[#111827] hover:bg-purple-600 transition-all cursor-pointer rounded-2xl px-5 py-4 text-lg"
          >
            {item}
          </div>

        ))}

      </div>

    </aside>
  );
}