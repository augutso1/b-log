import React from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

type PostBodyProps = {
  post: Post;
};

const PostBody: React.FC<PostBodyProps> = ({ post }) => {
  return (
    <article className="p-6 w-100 mx-auto max-w-3xl">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-semibold italic">{post.title}</h1>
      </div>
      <div className="flex justify-center">
        <p className="text-gray-500 text-sm">
          {new Date(post.createdAt).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'numeric',
          })}
        </p>
      </div>
      <div className="text-sm max-w-3xl whitespace-pre-wrap break-word mt-4 mx-auto">
        {post.content}
      </div>
    </article>
  );
};

export default PostBody;
