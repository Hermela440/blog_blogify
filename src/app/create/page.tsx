"use client";
import { useForm } from "react-hook-form";

interface FormData {
  title: string;
  body: string;
  tags?: string;
}

export default function CreatePostPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // For demo: just alert the data
    alert(`Post Created!\nTitle: ${data.title}\nBody: ${data.body}\nTags: ${data.tags || ''}`);
    reset();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl p-10 border border-blue-100 dark:border-zinc-800 backdrop-blur-md flex flex-col gap-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-blue-700 dark:text-blue-400 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Create Post</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-medium">Title</label>
          <input
            id="title"
            {...register("title", { required: "Title is required" })}
            className="px-3 py-2 sm:px-4 sm:py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
            placeholder="Post title"
            disabled={isSubmitting}
          />
          {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="body" className="font-medium">Body</label>
          <textarea
            id="body"
            rows={6}
            {...register("body", { required: "Body is required" })}
            className="px-3 py-2 sm:px-4 sm:py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
            placeholder="Write your post..."
            disabled={isSubmitting}
          />
          {errors.body && <span className="text-red-500 text-sm">{errors.body.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tags" className="font-medium">Tags <span className="text-gray-400">(optional, comma separated)</span></label>
          <input
            id="tags"
            {...register("tags")}
            className="px-3 py-2 sm:px-4 sm:py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
            placeholder="e.g. life, success, love"
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded transition-colors disabled:opacity-60 text-base sm:text-lg shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </form>
    </main>
  );
} 