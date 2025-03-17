import { Request, Response, NextFunction } from 'express';
import { verifyToken, JWTPayload } from '../utils/jwt';

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}
// Tipo global que adiciona o token ao corpo das requisições do Express

export const authenticateToken = async (req: Request, res: Response, next: NextFunction
): Promise<void> => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // Verificar se o token está presente no cabeçalho 'authorization' da requisição

  if (!token) {
    res.status(401).json({ error: 'Authentication token required' });
    return;
  }
  // Se o token não está presente, retornar um erro 401

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
    // Se o token está presente, verificar se é válido e adicionar o usuário ao corpo da requisição, e chamar o próximo middleware

  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
    return;
  }
  // Se o token não é válido, retornar um erro 403
};
// Middleware de autenticação de token