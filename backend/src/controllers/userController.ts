import { Request, Response } from 'express';
import { createUserService, getUserService } from '../services/userServices';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body;
        
        if (!email || !name || !password) {
            return res.status(400).json({ 
                message: 'Missing required fields: email, name, and password are required' 
            });
        }

        const newUser = await createUserService({ email, name, password });
        return res.status(201).json(newUser);
    } catch (error: any) {
        return res.status(400).json({ 
            message: error.message || 'Failed to create user' 
        });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ 
                message: 'User ID is required' 
            });
        }

        const user = await getUserService(id);
        
        if (!user) {
            return res.status(404).json({ 
                message: 'User not found' 
            });
        }

        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ 
            message: error.message || 'Error fetching user' 
        });
    }
}