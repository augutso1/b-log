import { fetchPosts } from '@/lib/api';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export const metadata = {
  title: 'Blog - Home',
  description: 'Welcome to my blog platform',
};

export default async function Home() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Meu Blog</h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum post encontrado.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                Publicado em{' '}
                {new Date(post.createdAt).toLocaleDateString('pt-BR')}
              </p>
              <div className="prose max-w-none">{post.content}</div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
