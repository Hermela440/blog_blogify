import Link from 'next/link';

export default function PostCard({ id, title, body }: { id: number, title: string, body: string }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white dark:bg-zinc-900 hover:shadow-lg transition flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{title}</h2>
      <p className="text-gray-700 dark:text-gray-200 flex-1">{body.slice(0, 100)}...</p>
      <Link href={`/posts/${id}`} className="text-blue-600 dark:text-blue-300 font-medium mt-3 inline-block hover:underline">Read More →</Link>
    </div>
  );
} 