import knex from './connection';

async function runMigrations() {
	try {
		await knex.migrate.latest();

		console.log('Migrations completed successfully');
	} catch (error) {
		console.log(error);
	} finally {
		await knex.destroy();
	}
}

runMigrations();
