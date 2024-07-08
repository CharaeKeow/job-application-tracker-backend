import JobApplicationModel from '../models/job-application.model';
import type { JobApplication } from '../types/job-application';

class JobApplicationService {
	async saveJobApplication({
		userId,
		jobApplication,
	}: {
		userId: string;
		jobApplication: JobApplication;
	}) {
		const jobApplicationModel = new JobApplicationModel();

		const jobApplicationId = await jobApplicationModel.saveJobApplication({
			userId,
			jobApplication,
		});

		return jobApplicationId;
	}
}

export default JobApplicationService;
