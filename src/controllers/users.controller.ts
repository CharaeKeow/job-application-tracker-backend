import { Request, Response } from 'express';

import UserService from '../services/user.service';

class UserController {
	async getUserByEmailAndProvider(req: Request, res: Response) {
		try {
			const { email, provider } = req.body;

			const userService = new UserService();
			const user = await userService.getUserByEmailAndProvider({
				email,
				provider,
			});

			if (user) {
				res.status(200).send({ exist: true });
				return;
			}

			res.status(200).send({ exist: false });
		} catch (error) {
			console.error('Error getting user', error);
			res.status(500).send({ message: 'Error checking if user exists' });
		}
	}

	async saveUser(req: Request, res: Response) {
		try {
			const { user } = req.body;
			const { email, provider, name, image } = user;

			const userService = new UserService();
			await userService.saveUser({ email, provider, name, image });

			res.status(200).send({ success: true });
		} catch (error) {
			console.error('Error saving user data', error);
			res.status(500).send({ message: 'Error saving user data' });
		}
	}
}

export default new UserController();
