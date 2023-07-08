import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import router from './controller/index';

const app = express();
const port = process.env.PORT || 8000;

const allowedOrigin = ['localhost:3000'];

app.use(
	cors({
		origin: allowedOrigin,
	}),
);

app.use('/', router);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
