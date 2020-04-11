async function deleteAccount(req, res) 
{
	const result = await userService.getAllUsers();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
};

modules.exports=deleteAccount