import knex from '../../database/connection';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../types/user';

class UserModel {
	async getUserByEmailAndProvider({
		email,
		provider,
	}: Pick<User, 'email' | 'provider'>) {
		return knex
			.select('id')
			.from('user')
			.where('email', email)
			.where('provider', provider)
			.first();
	}

	async saveUser(user: User) {
		const { name, email, provider, image } = user;

		const id = uuidv4();

		console.log({ id });

		return knex
			.insert({
				id,
				username: name,
				email,
				provider,
				image_url: image,
			})
			.into('user');
	}
}

export default UserModel;
