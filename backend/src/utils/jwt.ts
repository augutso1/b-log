import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import env from 'env-var';

const JWT_SECRET = env.get('JWT_SECRET').required().asString();
const TOKEN_EXPIRATION = '24h';

export interface JWTPayload {
    userId: string;
    email: string;
}

export const generateToken = (user: User): string => {
    const payload: JWTPayload = {
        userId: user.id,
        email: user.email,
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
};

export const verifyToken = (token: string): JWTPayload => {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
};