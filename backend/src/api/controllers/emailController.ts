import { Request, Response } from 'express';
import { emailService } from '../services/emailService';

export const emailController = {
    sendEmail: async (req: Request, res: Response) => {
        try {
            const { to, subject, text } = req.body;
            await emailService.sendEmail(to, subject, text);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    }
}; 