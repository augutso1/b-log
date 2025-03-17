import { sendEmailService, sendNewsletterService } from '../utils/email';

export const emailService = {
    sendEmail: async (to: string, subject: string, text: string) => {
        return sendEmailService(to, subject, text);
    },
    
    sendNewsletter: async (subject: string, text: string) => {
        return sendNewsletterService(subject, text);
    }
}; 