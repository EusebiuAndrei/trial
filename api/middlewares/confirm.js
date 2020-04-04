const { userService } = require('../../services/index');

const confirm = async function (req, res, next) {
	const { user } = req.data;

	const result = await userService.confirmRegistration(user[0]);
	if (result.success) {
		next();
	} else {
		res.status(401).json(result);
	}
};

module.exports = confirm;
