import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { createUser, getUser } from '../controllers/userController';
import { getHome } from '../controllers/homeController';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';
import { email } from '../controllers/emailController';
import { subscriptionController } from '../controllers/subscriptionController';
import { authorizeAdmin } from '../middleware/authorization';

const router = Router();

// Rotas públicas
router.get('/', getHome);
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

// Rotas protegidas
router.get('/posts', authenticateToken, getPosts);
router.post('/admin/posts', authorizeAdmin, authenticateToken, createPost);
router.get('/users', authenticateToken, getUser);
router.post('/users', authenticateToken, createUser);
router.post('/email/send', authenticateToken, email.sendEmail);
router.post('/email/subscription', authenticateToken, subscriptionController.subscription);

export default router;  