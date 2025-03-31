import React from 'react';
import { notFound } from 'next/navigation';
import { fetchPosts } from '@/lib/api';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

interface Props {
  params: { slug: string };
}

const PostPage: React.FC<Props> = async ({ params }) => {
  const { slug } = params;
  const posts: Post[] = await fetchPosts();

  const post = posts.find((post) => {
    const postSlug = post.title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
    return postSlug === slug;
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-16 p-6 w-full mx-auto max-w-5xl text-[#3F5668]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold italic">{post.title}</h1>
      </div>
      <div className="flex justify-center">
        <p className="text-sm mb-4">
          {new Date(post.createdAt).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'numeric',
          })}
        </p>
      </div>
      <div className="pt-24">
        <article className="p-8 border-t border-[#3F5668]">
          <div className="whitespace-pre-wrap break-word mt-2 text-gray-700">
            {post.content}
          </div>
        </article>
      </div>
    </article>
  );
};

export default PostPage;
