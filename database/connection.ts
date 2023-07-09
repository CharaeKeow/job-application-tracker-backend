import Knex from 'knex';
import config from './knexfile';

// Create a singleton instance of Knex
const knex = Knex(config.development);

export default knex;
