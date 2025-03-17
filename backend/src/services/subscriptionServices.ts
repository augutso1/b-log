import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const subscribeService = async (email: string, userId: string) => {
    // Primeiro, verificar se o usuário existe
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        throw new Error('User not found');
    }

    const subscription = await prisma.subscription.create({
        data: {
            email: user.email, // Usar o email do usuário encontrado
            userId,
            receivePosts: true
        }
    });
    
    return subscription;
}

export const unsubscribeService = async (email: string, userId: string) => {
    const subscription = await prisma.subscription.findFirst({
        where: {
            email,
            userId
        }
    })

    if (!subscription) {
        throw new Error('Subscription not found');
    }

    return prisma.subscription.delete({
        where: {
            id: subscription.id
        }
    })
}