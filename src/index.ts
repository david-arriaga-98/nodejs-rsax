import App from './App';

const app: App = new App();

const StartApplication = async () => {
	await app.main();
};

StartApplication();
