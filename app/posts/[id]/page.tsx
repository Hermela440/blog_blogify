import { useParams } from 'next/navigation';

export default function PostPage() {
  // In the App Router, params are usually passed as props, but for a placeholder, we'll use useParams
  const params = useParams();
  return (
    <main style={{ padding: 32 }}>
      <h1>Post: {params?.id}</h1>
      <p>This is a placeholder for the dynamic post page.</p>
    </main>
  );
} 