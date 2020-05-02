const { Router } = require('express');
const { clientService } = require('../../services/index.js');

const router = Router();

router.get('/', async (req, res) => {
	const result = await clientService.getClients(req.query);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

router.get('/:idClient', async (req, res) => {
	const { idClient } = req.params;
	const result = await clientService.getClientbyId(idClient);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

module.exports = router;
