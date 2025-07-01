"use client";
import { useState } from "react";
import PostCard from "../components/PostCard";

const demoPosts = [
  {
    id: 1,
    title: "Stories of Grace and Kindness",
    body: "This blog shares unique stories in English, offering inspiration and insight for all readers.",
  },
  {
    id: 2,
    title: "Life Lessons",
    body: "Find practical life lessons here. Everyone can benefit from these helpful tips and advice.",
  },
  {
    id: 3,
    title: "Secrets of Success",
    body: "Discover the secrets to achieving success, especially useful for young people and professionals.",
  },
  {
    id: 4,
    title: "Love Stories",
    body: "Read touching love stories in English. Explore different experiences and perspectives.",
  },
  {
    id: 5,
    title: "Family Matters",
    body: "Explore family challenges and solutions. Practical advice for building strong family relationships.",
  },
  {
    id: 6,
    title: "Workplace Wisdom",
    body: "Get useful tips for your career and workplace. Enhance your professional skills and knowledge.",
  },
  {
    id: 7,
    title: "Spiritual Reflections",
    body: "Find stories and reflections for those seeking spiritual growth and encouragement.",
  },
  {
    id: 8,
    title: "Education Insights",
    body: "Discover stories and advice related to education and learning for all ages.",
  },
  {
    id: 9,
    title: "Health & Wellness",
    body: "Access helpful health information and wellness tips for everyone.",
  },
  {
    id: 10,
    title: "Life Stories",
    body: "Read inspiring life stories and experiences that offer valuable lessons for all.",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const filteredPosts = demoPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 sm:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center py-16">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Unique Blog Stories
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
          This blog app is built in English and offers valuable content on a variety of topics for everyone.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full max-w-md px-6 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg sm:text-xl shadow transition-all"
          />
        </div>
      </section>
      {/* Post Grid */}
      <section className="w-full max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 text-xl py-20">No posts found.</div>
          )}
        </div>
      </section>
    </main>
  );
}

// NOTE: This project uses the Next.js App Router (src/app), not the Pages Router (src/pages). For dynamic routes, create a folder 'app/posts/[id]/page.tsx' and use the App Router's data fetching methods.
