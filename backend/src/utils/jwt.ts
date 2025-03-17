import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import env from 'env-var';

const JWT_SECRET = env.get('JWT_SECRET').required().asString(); // Chave secreta para o token
const TOKEN_EXPIRATION = '24h'; // Tempo de expiração do token

export interface JWTPayload {
    userId: string;
    email: string;
}
// Definir o padrão de tipo JWTPayloadde dados para o token

export const generateToken = (user: User): string => {
    const payload: JWTPayload = {
        userId: user.id,
        email: user.email,
    };
    // Criar o payload para gerar o token

    return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
};
// Gerar o token

export const verifyToken = (token: string): JWTPayload => {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
};
// Verificar o token