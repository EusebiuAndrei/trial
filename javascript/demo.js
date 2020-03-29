const http = require('http');

const server = http.createServer(function (request, response) {
	response.send('Hello');
	response.end();
});

server.listen(3000, function () {
	console.log('Server running on port 3000');
});
