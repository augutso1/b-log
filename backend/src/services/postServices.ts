import { Post, PrismaClient } from '@prisma/client';
import { sendNewsletterService } from '../utils/email';

const prisma = new PrismaClient();

export const getPostsService = async () => {
    const posts = await prisma.post.findMany();
    return posts;
}
// Função para buscar posts

export const createPostService = async (post: Post) => {
    console.log('Criando post:', post); // Log para debug

    const newPost = await prisma.post.create({
        data: post
    });

    console.log('Post criado:', newPost); // Log para debug

    if (newPost.published) {
        console.log('Post está publicado, enviando newsletter...'); // Log para debug
        try {
            await sendNewsletterService(
                `Novo post: ${newPost.title}`,
                newPost.content
            );
            console.log('Newsletter enviada com sucesso');
        } catch (error) {
            console.error('Erro ao enviar newsletter:', error);
            // Não lançamos o erro para não impedir a criação do post
        }
    } else {
        console.log('Post não está publicado, pulando envio de newsletter');
    }
    // Log para debug

    return newPost;
}
// Função para criar post