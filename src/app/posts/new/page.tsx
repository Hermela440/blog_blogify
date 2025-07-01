import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      // Placeholder: Replace with actual API call
      await new Promise((res) => setTimeout(res, 1000));
      setSuccess(true);
      setTitle("");
      setBody("");
      // Optionally redirect to home or posts page
      // router.push("/");
    } catch (err) {
      setError("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border border-gray-300 dark:border-zinc-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block font-semibold mb-1">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            className="w-full border border-gray-300 dark:border-zinc-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Posting..." : "Create Post"}
        </button>
        {success && <p className="text-green-600 mt-2">Post created successfully!</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
} 