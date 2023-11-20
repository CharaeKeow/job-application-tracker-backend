import Knex from 'knex';
import config from './knexfile';

const production = process.env.NODE_ENV === 'development';

// Create a singleton instance of Knex
// TODO: Use `production` variale
const knex = Knex(config.development);

export default knex;
