import type { Request, Response } from 'express';

import JobApplicationService from '../services/job-application.service';

class JobApplicationController {
	// eslint-disable-next-line class-methods-use-this
	async saveJobApplication(req: Request, res: Response) {
		try {
			const { jobApplication } = req.body;
			const { userId } = req;

			const jobApplicationService = new JobApplicationService();
			await jobApplicationService.saveJobApplication({
				userId,
				jobApplication,
			});

			res.status(200).send({});
		} catch (error) {
			res.status(500).send({ message: 'Error saving job application.' });
		}
	}
}

export default new JobApplicationController();
