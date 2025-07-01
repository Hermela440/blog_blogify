import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-lg mb-8 border-b border-blue-100 dark:border-zinc-800 transition-all">
      <nav className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-2 sm:gap-0">
        <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-400">
          <span className="inline-block w-7 h-7 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-md">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white"/><path d="M8 12h8M8 16h5M8 8h8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          Blogify
        </Link>
        <ul className="flex gap-3 sm:gap-6 text-base sm:text-lg font-medium mt-2 sm:mt-0">
          <li>
            <Link href="/" className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4 transition-colors">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4 transition-colors">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 