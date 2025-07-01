"use client";

import { useState } from "react";
import Head from "next/head";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      window.alert("Thank you for contacting us! We'll get back to you soon.");
      setSubmitting(false);
      e.currentTarget.reset();
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Contact | Blogify</title>
        <meta name="description" content="Contact the Blogify team with your questions, feedback, or suggestions." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 bg-background text-foreground">
        <form
          className="w-full max-w-lg bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl p-10 border border-blue-100 dark:border-zinc-800 backdrop-blur-md flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-blue-700 dark:text-blue-400 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Contact Us</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="px-3 py-2 sm:px-4 sm:py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
              placeholder="Your name"
              disabled={submitting}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="px-3 py-2 sm:px-4 sm:py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
              placeholder="you@example.com"
              disabled={submitting}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
              placeholder="Your message"
              disabled={submitting}
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded transition-colors disabled:opacity-60 text-base sm:text-lg shadow-lg"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </>
  );
} 