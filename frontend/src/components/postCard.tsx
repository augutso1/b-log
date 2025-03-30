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
  return (
    <article className="p-6 w-100 border-b border-gray-200 mx-auto max-w-2xl">
      <div className="flex justify-between items-baseline mb-2">
        <h1 className="text-lg font-semibold mb-2 italic">{post.title}</h1>

        <p className="text-gray-500 text-xs mb-2 text-right">
          {new Date(post.createdAt).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'numeric',
          })}
        </p>
      </div>
      <div className="text-sm text-gray-700 max-w-120 whitespace-pre-wrap break-word mt-2">
        {truncateContent(post.content, 199)}
      </div>
    </article>
  );
}
