import { Router } from 'express';

import jobApplicationController from '../controllers/job-application.controller';
import authenticate from '../middlewares/authenticate';

const router = Router();

router.post(
	'/create',
	authenticate,
	jobApplicationController.saveJobApplication,
);

export default router;
