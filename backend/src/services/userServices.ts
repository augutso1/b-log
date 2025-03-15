import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreateUserInput = {
    email: string;
    name: string;
    password: string;
}

export const createUserService = async (userData: CreateUserInput) => {
    const newUser = await prisma.user.create({
        data: userData
    });
    return newUser;
}

export const getUserService = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id }
    });
    return user;
}