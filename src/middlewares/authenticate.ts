import 'dotenv/config';

import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function verifyToken(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const secret = process.env.JWT_SECRET ?? '';
	const token = req.headers.authorization?.split(' ')[1];

	if (!token) {
		return res.status(401).json({ error: 'Missing token!' });
	}

	try {
		const decoded = jwt.verify(token, secret) as { userId: string };
		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.error(error);
		return res.status(403).json({ error: 'Invalid token' });
	}
}
