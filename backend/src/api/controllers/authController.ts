import { Request, Response } from 'express';
import { registerService, loginService } from '../../services/authServices';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const result = await registerService({ name, email, password });
    res.status(201).json(result);
  }
  // Confirma o registro de um usuário
  
  catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
  // Caso ocorra um erro, retorna um erro 400 ou 500
};
// Controller que realiza o registro de um usuário

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await loginService({ email, password });
    res.status(200).json(result);
  }
  // Confirma o login de um usuário
  
  catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
  // Caso ocorra um erro, retorna um erro 401 ou 500
};
// Controller que realiza o login de um usuário