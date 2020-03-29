const http = require('http');

const server = http.createServer(function (request, response) {
	console.log(request.url);
	console.log(request.method);

	switch (request.url) {
		case '/':
			response.write('<h1>Home</h1>');
			break;
		case '/me':
			response.write('<h1>Me</h1>');
			break;
		case '/about':
			response.write('<h1>About</h1>');
			break;
		default:
			response.write('<h1>Default page</h1>');
			break;
	}

	response.end();
});

server.listen(3000, function () {
	console.log('Server running on port 3000');
});
