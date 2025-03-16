import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { createUser, getUser } from '../controllers/userController';
import { getHome } from '../controllers/homeController';
const router = Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.post('/users', createUser);
router.get('/users', getUser);
router.get('/', getHome);

export default router;