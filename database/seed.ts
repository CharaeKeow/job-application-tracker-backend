import knex from './connection';

async function runSeeds() {
	try {
		await knex.seed.run();

		console.log('Seeding completed successfully');
	} catch (error) {
		console.error(error);
	} finally {
		await knex.destroy();
	}
}

runSeeds();
