const express = require('express');

const config = require('./config');
const loaders = require('./loaders/index');

// import Logger from './loaders/logger';

async function startServer() {
	const app = express();

	/**
	 * A little hack here
	 * Import/Export can only be used in 'top-level code'
	 * Well, at least in node 10 without babel and at the time of writing
	 * So we are using good old require.
	 **/
	// await require('./loaders').default({ expressApp: app });
	await loaders({ expressApp: app });

	app.listen(config.port, (err) => {
		if (err) {
			// Logger.error(err);
			process.exit(1);
			return;
		}
		console.log(`Server listening on port: ${config.port}`);
		// 	Logger.info(`
		//   ################################################
		//   🛡️  Server listening on port: ${config.port} 🛡️
		//   ################################################
		// `);
	});
}
// sgfsd sfd fsdsrewv
startServer();

// const express = require('express');
// const mongoose = require('mongoose');
// const config = require('./config/index');
// const User = require('./models/user');

// const app = express();

// app.use(express.json());

// app.get('/', function (req, res) {
// 	res.send(req.body);
// 	res.end();
// });

// app.get('/users', async function (req, res) {
// 	try {
// 		const users = await User.find({});

// 		res.status(200).json(users);
// 	} catch (error) {
// 		res.status(400).json({ success: false, error });
// 	}
// });

// app.post('/users', async function (req, res) {
// 	try {
// 		const user = await User.create(req.body);

// 		res.status(201).json({ success: true, user });
// 	} catch (error) {
// 		res.status(400).json({ success: false, error });
// 	}
// });

// mongoose.connect(
// 	config.databaseURL,
// 	{ useNewUrlParser: true, useUnifiedTopology: true },
// 	function () {
// 		console.log('DB up and running');
// 	},
// );

// app.listen(3000, function () {
// 	console.log('Server running');
// });
