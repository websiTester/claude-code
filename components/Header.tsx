import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex gap-8 items-center">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/preview"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Preview
            </Link>
          </li>
          <li className="ml-auto">
            <Link
              href="/login"
              className="text-sm font-medium px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
