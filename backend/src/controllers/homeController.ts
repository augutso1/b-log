import { Request, Response } from 'express';
import { getHomeService } from '../services/homeServices';

export const getHome = async (req: Request, res: Response) => {
  try {
    const homeData = await getHomeService();
    res.status(200).json(homeData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar dados da home.' });
  }
};