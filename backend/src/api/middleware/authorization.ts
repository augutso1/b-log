import { Request, Response, NextFunction } from "express";
import { PrismaClient } from '@prisma/client';
import { JWTPayload } from "../../utils/jwt";
import asyncHandler from 'express-async-handler';

const prisma = new PrismaClient();

export const authorizeAdmin = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Busca o userId no token
        const userId = (req.user as JWTPayload)?.userId;
        
        if (!userId) {
            res.status(401).json({ error: 'User not authenticated' });
            return;
        }
        
        // Verificar se o usuário é admin
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        
        if (user && user.role === 'admin') {
            next(); 
        } else {
            res.status(403).json({ error: 'Access denied: Admin privileges required' });
        }
    }
    // Busca no banco de dados se o usuário é admin
    catch (error) {
        console.error('Authorization error:', error);
        res.status(500).json({ error: 'Internal server error during authorization' });
    }
    // Erro 403 forbidden
});