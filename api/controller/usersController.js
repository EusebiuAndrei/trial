async function deleteAccount(req, res) 
{
	var userId=req.data.user.id
	var json=await deleteById(userId)

	res.status(statusCode).json(json)
}

modules.exports=deleteAccount