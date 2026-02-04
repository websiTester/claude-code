import Image from "next/image";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-100 to-blue-200 font-sans dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex flex-col items-center justify-center py-16 px-8">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
            Doraemon: Nobita's Mermaid Legend
          </h1>
          <p className="text-lg text-blue-700 dark:text-blue-400">
            ドラえもん のび太の人魚大海戦
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/doraemon.jpg"
            alt="Doraemon: Nobita's Mermaid Legend movie poster"
            width={600}
            height={850}
            priority
            className="object-cover"
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <LoginButton />
        </div>
      </main>
    </div>
  );
}
