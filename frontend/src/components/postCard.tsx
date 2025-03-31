import Link from 'next/link';
import React from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

type PostCardProps = {
  post: Post;
};

const truncateContent = (content: string, maxLength: number): string => {
  if (content.length <= maxLength) return content;
  return content.slice(0, maxLength) + '...';
};

export default function PostCard({ post }: PostCardProps) {
  const slug = post.title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

  console.log('Generated slug:', slug);

  return (
    <Link href={`/post/${slug}`} passHref>
      <article className="p-6 w-100 border-b border-[#3F5668] mx-auto max-w-2xl cursor-pointer">
        <div className="flex justify-between items-baseline mb-2">
          <h1 className="text-lg font-semibold mb-2 italic">{post.title}</h1>

          <p className="text-xs mb-2 text-right">
            {new Date(post.createdAt).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'numeric',
            })}
          </p>
        </div>
        <div className="text-gray-700 text-sm max-w-120 whitespace-pre-wrap break-word mt-2">
          {truncateContent(post.content, 199)}
        </div>
      </article>
    </Link>
  );
}
