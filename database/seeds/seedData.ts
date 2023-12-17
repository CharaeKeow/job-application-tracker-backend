import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Delete ALL existing entries
	await knex('application_status').del();

	await knex('application_status').insert([
		{ status: 'bookmarked' },
		{
			status: 'applying',
		},
		{
			status: 'applied',
		},
		{ status: 'interviewing' },
		{ status: 'negotiating' },
		{ status: 'accepted' },
		{ status: 'declined' },
		{ status: 'rejected' },
		{ status: 'assessment' },
		{ status: 'withdrawn' },
		{ status: 'pending review' },
		{ status: 'ghosted' },
		{ status: 'archived' },
	]);
}
