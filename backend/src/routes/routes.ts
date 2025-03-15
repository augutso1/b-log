import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { createUser, getUser } from '../controllers/userController';
const router = Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.post('/users', createUser);
router.get('/users', getUser);

export default router;