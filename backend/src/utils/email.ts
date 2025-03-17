import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const sendEmailService = async (to: string, subject: string, text: string) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    // Cria o transporter para conectar com o servidor de e-mail

    try {
        const info = await transporter.sendMail({
            from: `"B-log" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        });
        console.log(`E-mail enviado para ${to}: ${info.messageId}`);
    } catch (error) {
        console.error(`Erro ao enviar e-mail para ${to}:`, error);
    }
    // Envia o e-mail para o usuário
}
// Função para direcionar o envio do email

export const sendNewsletterService = async (subject: string, text: string) => {
    const subscribers = await prisma.subscription.findMany({
        where: {
            receivePosts: true
        },
        select: {
            email: true
        }
    });

    for (const subscriber of subscribers) {
        await sendEmailService(subscriber.email, subject, text);
    }
}
// Envia a newsletter para todos os usuários que assinaram o newsletter