"use client";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-6 py-32 px-16">
        <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
          About
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          hello my fen
        </p>
        <button
          onClick={() => console.log("Rainbow button clicked")}
          className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:from-red-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Rainbow Button
        </button>
      </main>
    </div>
  );
}
