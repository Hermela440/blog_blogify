"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Toggle dark mode
  const toggleDark = () => {
    setDark((d) => {
      if (!d) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return !d;
    });
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg border-b border-blue-100 dark:border-zinc-800 transition-all sticky top-0 z-30">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-700 dark:text-blue-400">
          <span className="inline-block w-7 h-7 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-md">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white"/><path d="M8 12h8M8 16h5M8 8h8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          Blogify
        </Link>
        <div className="flex items-center gap-2 sm:hidden">
          <button onClick={toggleDark} className="p-2 rounded hover:bg-blue-100 dark:hover:bg-zinc-800 transition">
            {dark ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
            )}
          </button>
          <button onClick={() => setOpen((o) => !o)} className="p-2 rounded hover:bg-blue-100 dark:hover:bg-zinc-800 transition">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <ul className={`sm:flex gap-6 text-lg font-medium items-center ${open ? 'flex flex-col absolute top-16 left-0 w-full bg-white/95 dark:bg-zinc-900/95 p-6 border-b border-blue-100 dark:border-zinc-800' : 'hidden sm:flex static p-0 bg-transparent border-0'}`}>
          <li>
            <Link href="/" className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4 transition-colors" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/create" className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4 transition-colors" onClick={() => setOpen(false)}>Create Post</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline underline-offset-4 transition-colors" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className="hidden sm:block">
            <button onClick={toggleDark} className="p-2 rounded hover:bg-blue-100 dark:hover:bg-zinc-800 transition">
              {dark ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
} 