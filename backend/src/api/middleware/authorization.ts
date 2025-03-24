import { Request, Response, NextFunction } from "express";
import { PrismaClient } from '@prisma/client';
import { JWTPayload } from "../../utils/jwt";
import asyncHandler from 'express-async-handler';

const prisma = new PrismaClient();

export const authorizeAdmin = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = req.user as JWTPayload;
    
    if (!user) {
        res.status(401).json({ error: 'User not authenticated' });
        return;
    }
    
    // Debug

    console.log('User role:', user.role);

    // Verifica a role no payload do token JWT
    if (user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Access denied: Admin privileges required' });
    }
});