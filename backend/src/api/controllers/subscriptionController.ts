import { Request, Response } from 'express';
import { subscribeService } from '../../services/subscriptionServices';

export const subscriptionController = {
    subscription: async (req: Request, res: Response) => {
        try {
            const { email, receivePosts } = req.body;
            const userId = req.user?.userId;
            
            if (!userId) {
                res.status(401).json({ error: 'User not authenticated' });
                return;
            }
            
            const subscription = await subscribeService(email, userId);
            res.status(201).json(subscription);
        } catch (error) {
            console.error('Subscription error:', error);
            res.status(500).json({ 
                error: 'Failed to create subscription',
                details: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
};
