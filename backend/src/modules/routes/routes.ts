import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { createUser, getUser } from '../controllers/userController';
import { getHome } from '../controllers/homeController';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticateToken } from '../middleware/authentication';
import { email } from '../controllers/emailController';
import { subscriptionController } from '../controllers/subscriptionController';
import { authorizeAdmin } from '../middleware/authorization';

const router = Router();

// Rotas públicas
router.get('/', getHome);
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/posts', getPosts);

// Rotas protegidas
router.post('/admin/posts', authenticateToken, authorizeAdmin, createPost);
router.get('/users', authenticateToken, getUser);
router.post('/users', authenticateToken, createUser);
router.post('/email/send', authenticateToken, email.sendEmail);
router.post('/email/subscription', authenticateToken, subscriptionController.subscription);

export default router;