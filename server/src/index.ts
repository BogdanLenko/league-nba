import express, {type Express} from 'express'
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.json());

const start = () => {
	try {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on http://localhost:${process.env.PORT}`);
		})
	} catch (error) {
		console.error(error);
	}
}

start();
