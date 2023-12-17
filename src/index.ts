import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import userRoutes from './routes/user.route';

const app = express();
const port = process.env.PORT || 8000;

const allowedOrigin = ['http://localhost:3000'];

app.use(
	cors({
		origin: allowedOrigin,
	}),
);

app.use(express.json());
app.use('/api/user', userRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
