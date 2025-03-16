import { Request, Response } from 'express';
import { createUserService, getUserService } from '../services/userServices';

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await createUserService(user);
    res.json(newUser);
}

export const getUser = async (req: Request, res: Response) => {
    const user = req.body;
    const getUser = await getUserService();
    res.json(getUser);
}