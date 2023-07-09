import knex from './connection';

async function rollback() {
	try {
		await knex.migrate.rollback();

		console.log('Migration rollback completed successfully');
	} catch (error) {
		console.log(error);
	} finally {
		await knex.destroy();
	}
}

rollback();
