import express, { Application } from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';

class App {
	private app: Application;

	constructor() {
		this.app = express();
		this.configurations();
		this.middlewares();
		this.routes();
	}

	private configurations(): void {
		config();
		this.app.set('port', process.env.PORT || 50000);
	}

	private middlewares(): void {
		this.app.use(morgan('tiny'));
		this.app.use(express.json());
	}

	private routes(): void {
		this.app.use((req, res) => {
			res.status(404).json({ error: 'This page don´t exist' });
		});
	}

	public async main() {
		try {
			await this.app.listen(this.app.get('port'));
			console.log('Server on port:', this.app.get('port'));
		} catch (error) {
			console.log('Server error:', error);
		}
	}
}

export default App;
