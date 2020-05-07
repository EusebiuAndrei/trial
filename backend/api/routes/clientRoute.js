const { Router } = require('express');
const { clientService } = require('../../services/index.js');

const router = Router();

router.get('/', async (req, res) => {
	const result = await clientService.getClients(req.query);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;
	const result = await clientService.getClientbyId(userId);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

router.post('/addCommand', async (req, res) => {
	const result = await clientService.addCommandById(req.body);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.post('/addReservation', async (req, res) => {
	const result = await clientService.addReservationById(req.body);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

module.exports = router;
