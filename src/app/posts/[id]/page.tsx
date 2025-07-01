import { notFound } from "next/navigation";
import Head from "next/head";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostPageProps {
  params: { id: string };
}

async function getPost(id: string): Promise<Post | null> {
  // Demo: return a static post for any id
  const posts = [
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
  const post = posts.find((p) => p.id.toString() === id);
  return post || null;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.id);
  if (!post) return notFound();

  return (
    <>
      <Head>
        <title>{post.title} | Blogify</title>
        <meta name="description" content={post.body.slice(0, 150) + (post.body.length > 150 ? '...' : '')} />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 bg-background text-foreground">
        <article className="w-full max-w-2xl bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl p-10 border border-blue-100 dark:border-zinc-800 backdrop-blur-md">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-blue-700 dark:text-blue-400 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            {post.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 whitespace-pre-line leading-relaxed">
            {post.body}
          </p>
        </article>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  // Demo: return static params for ids 1-10
  return Array.from({ length: 10 }, (_, i) => ({ id: (i + 1).toString() }));
} 