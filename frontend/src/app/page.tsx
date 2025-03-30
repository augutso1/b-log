import { fetchPosts } from '@/lib/api';
import { Libre_Baskerville } from 'next/font/google';
import PostCard from '@/components/postCard';

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export const metadata = {
  title: 'b-log - Home',
  description: 'b-log',
};

export default async function Home() {
  const posts: Post[] = await fetchPosts();

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div className={`max-w-3xl mx-auto p-4 ${libreBaskerville.className}`}>
      <h1 className="text-3xl font-bold mb-8 text-center">b-log</h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum post encontrado.</p>
      ) : (
        <div className="space-y-8">
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
