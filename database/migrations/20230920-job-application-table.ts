import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('job_application', (table) => {
		table.increments();
		table.uuid('user_id');
		table.string('company_name');
		table.enum('company_type', ['startup', 'mnc', 'other']);
		table.string('position');
		table.integer('status_id');
		table.text('link');
		table.text('description'); // This could be extended to a separate table later. TBD
		// still debating whether I want platform or not. It'd be a dropdown, but the list would be LONG. Making it a text field also sounds... wrong? TBD
		// table.number('platform_id');
		table.timestamp('date_applied');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');

		table.foreign('user_id').references('user.id');
		table.foreign('status_id').references('application_status.id');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('job_application');
}
