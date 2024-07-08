import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import jobApplicationRoutes from './routes/job-application.route';
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
app.use('/api/job-application', jobApplicationRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
