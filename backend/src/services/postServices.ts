import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPostsService = async () => {
    const posts = await prisma.post.findMany();
    return posts;
}
// Função para buscar posts

export const createPostService = async (post: Post) => {
    const newPost = await prisma.post.create({ data: post });
    return newPost;
}
// Função para criar post