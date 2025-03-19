import { Request, Response } from 'express';
import { getPostsService, createPostService } from '../../services/postServices';

export const getPosts = async (req: Request, res: Response) => {
    const posts = await getPostsService();
    res.json(posts);
}
// Função para buscar posts

export const createPost = async (req: Request, res: Response) => {
    const post = req.body;
    const newPost = await createPostService(post);
    res.json(newPost);
}
// Função para criar post