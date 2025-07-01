import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Blogify</title>
        <meta name="description" content="Learn more about Blogify, a modern, responsive blog app built with Next.js and Tailwind CSS." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 bg-background text-foreground">
        <article className="w-full max-w-2xl bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl p-10 border border-blue-100 dark:border-zinc-800 backdrop-blur-md">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-blue-700 dark:text-blue-400 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            About Blogify
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
            Blogify is a modern, responsive blog application built with Next.js and Tailwind CSS. It demonstrates static and dynamic routing, data fetching, and clean UI design. Explore posts, learn more about the app, or get in touch via the contact page!
          </p>
        </article>
      </div>
    </>
  );
} 