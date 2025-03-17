import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const subscribeService = async (email: string, userId: string) => {
    const subscription = await prisma.subscription.create({
        data: {
            email,
            userId
        }
    })
    
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