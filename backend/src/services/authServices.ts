import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

interface RegisterData {
  name: string;
  email: string;
  password: string;
}


export const registerService = async (data: RegisterData): Promise<{ user: Omit<User, 'password'>, token: string }> => {
    const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
    });
    
    if (existingUser) {
        throw new Error('Email already registered');
    }
    
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    
    const user = await prisma.user.create({
        data: {
            ...data,
            password: hashedPassword
        }
    });   
    
    const token = generateToken(user);
    
    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
};

interface LoginData {
  email: string;
  password: string;
}


export const loginService = async (data: LoginData): Promise<{ user: Omit<User, 'password'>, token: string }> => {
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user) {
    throw new Error('Invalid credentials/You are not registered');
  }

  const validPassword = await bcrypt.compare(data.password, user.password);

  if (!validPassword) {
    throw new Error('Invalid credentials/You are not registered');
  }

  const token = generateToken(user);
  
  const { password, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token };
};