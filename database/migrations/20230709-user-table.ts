import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('user', (table) => {
		table.uuid('id').primary();
		table.string('username');
		table.string('email').unique();
		table.string('password');
		table.timestamp('created_at').defaultTo(knex.fn.now());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('user');
}
