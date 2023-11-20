import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('interview', (table) => {
		table.increments();
		table.integer('job_application_id');
		table.timestamp('interview_date');
		table.string('location'); // in case it's offline interview
		table.boolean('is_online').defaultTo(true);
		table.string('platform'); // online interview platform
		table.text('link');
		table.text('remarks');
		table.timestamp('created_at').defaultTo(knex.fn.now());

		table.foreign('job_application_id').references('job_application.id');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('interview');
}
