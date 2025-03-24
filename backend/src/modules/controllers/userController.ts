import { Request, Response } from 'express';
import { createUserService, getUserService } from '../../services/userServices';

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await createUserService(user);
    res.json(newUser);
}
// Função para criar usuário

export const getUser = async (req: Request, res: Response) => {
    const userID = req.params.id;
    const getUser = await getUserService(userID);
    res.json(getUser);
}
// Função para buscar usuário