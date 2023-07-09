import 'dotenv/config';

type KnexConfig = {
	[key: string]: object;
};

// TODO: Create development & production one, by reading the option from .env
// TODO: Read db connection info from .env instead of declaring directly here, for usability and pushing to GH
const config: KnexConfig = {
	development: {
		client: 'pg',
		connection: {
			host: process.env.DB_HOST,
			port: 5432,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			// database: '',
		},
		migrations: {
			directory: './database/migrations',
		},
		seeds: {
			directory: './database/seeds',
		},
	},
};

export default config;
