import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const createUserService = async (user: User) => {
    const newUser = await prisma.user.create({ data: user });
    return newUser;
}

export const getUserService = async (id: string)=> {
    const getUser = await prisma.user.findMany();
    return getUser;
}