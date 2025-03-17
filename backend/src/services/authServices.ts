import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';

const prisma = new PrismaClient();

const SALT_ROUNDS = 10;
// Definir o número de rounds para o hash da senha

interface RegisterData {
  name: string;
  email: string;
  password: string;
}
// Definir o padrão de tipo de dados para o registro de usuário

interface LoginData {
  email: string;
  password: string;
}
// Definir o padrão de tipo de dados para o login de usuário

export const registerService = async (data: RegisterData): Promise<{ user: Omit<User, 'password'>, token: string }> => {
    const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
    });
    // Buscar usuário pelo email

    if (existingUser) {
        throw new Error('Email already registered');
    }
    // Verificar se o email já existe
    
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);


    
    const user = await prisma.user.create({
        data: {
            ...data,
            password: hashedPassword
        }
    });   
    // Adiciona a senha criptografada ao usuário
    
    const token = generateToken(user);
    // Gerar token para o usuário
    
    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
    // Cria um usuários sem a senha e retorna este usuário e o token

};
// Função para registrar um usuário



export const loginService = async (data: LoginData): Promise<{ user: Omit<User, 'password'>, token: string }> => {
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });
  // Buscar usuário pelo email

  if (!user) {
    throw new Error('Invalid credentials/You are not registered');
  }
  // Verificar se o usuário existe

  const validPassword = await bcrypt.compare(data.password, user.password);

  if (!validPassword) {
    throw new Error('Invalid credentials/You are not registered');
  }

  const token = generateToken(user);
  
  const { password, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token };
};
// Função para logar um usuário