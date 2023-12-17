import UserModel from '../models/users.model';
import { User } from '../types/user';

class UserService {
	async getUserByEmailAndProvider({
		email,
		provider,
	}: Pick<User, 'email' | 'provider'>) {
		const userModel = new UserModel();

		const user = await userModel.getUserByEmailAndProvider({
			email,
			provider,
		});

		return user;
	}

	async saveUser(user: User) {
		const userModel = new UserModel();

		await userModel.saveUser(user);
	}
}

export default UserService;
