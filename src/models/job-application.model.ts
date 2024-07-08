import knex from '../../database/connection';
import type { JobApplication } from '../types/job-application';

class JobApplicationModel {
	async saveJobApplication({
		userId,
		jobApplication,
	}: {
		userId: string;
		jobApplication: JobApplication;
	}) {
		const {
			company,
			companyType,
			position,
			status,
			link,
			description,
			excitement,
			dateApplied,
		} = jobApplication;

		return knex.transaction(async (trx) => {
			await trx
				.insert({
					user_id: trx.select('id').from('user').where('id', userId),
					company_name: company,
					company_type: companyType,
					position,
					status_id: trx
						.select('id')
						.from('application_status')
						.where('status', status.toLowerCase())
						.limit(1),
					link,
					job_description: description,
					rating: excitement,
					date_applied: dateApplied,
				})
				.into('job_application')
				.returning('id');
		});
	}
}

export default JobApplicationModel;
