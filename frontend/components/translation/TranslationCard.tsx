export default function TranslationCard() {

  return (

    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 shadow-2xl h-full">

      <h2 className="text-2xl font-bold mb-8">
        Live Translation
      </h2>

      <div className="space-y-6">

        <div>

          <p className="text-gray-400 mb-2">
            English
          </p>

          <div className="bg-[#111827] rounded-2xl p-5 text-xl border border-gray-700">
            Hello, how are you?
          </div>

        </div>

        <div>

          <p className="text-gray-400 mb-2">
            Hindi
          </p>

          <div className="bg-[#111827] rounded-2xl p-5 text-xl border border-gray-700">
            नमस्ते, आप कैसे हैं?
          </div>

        </div>

      </div>

      <button className="mt-10 w-full bg-purple-600 hover:bg-purple-700 transition-all py-4 rounded-2xl text-lg font-semibold">
        Start Translation
      </button>

    </div>
  );
}