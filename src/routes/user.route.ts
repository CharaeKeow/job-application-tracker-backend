import { Router } from 'express';

import UserController from '../controllers/users.controller';

const router = Router();

router.post('/check-user-exist', UserController.getUserByEmailAndProvider);
router.post('/save-user', UserController.saveUser);

export default router;
