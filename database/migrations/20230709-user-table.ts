import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('user', (table) => {
		table.uuid('id').primary();
		table.string('username'); // this is actually the name returned by providers for now
		table.string('email');
		table.enum('provider', ['google', 'github']);
		table.text('image_url');

		// table.string('password');
		table.timestamp('created_at').defaultTo(knex.fn.now());

		table.unique(['email', 'provider']);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('user');
}
