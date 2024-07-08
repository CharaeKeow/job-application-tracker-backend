export type User = {
	email: string;
	name: string;
	provider: 'github' | 'google';
	image: string;
};

export type UserEmailAndProvider = Pick<User, 'email' | 'provider'>;
