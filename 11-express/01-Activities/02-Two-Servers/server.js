const http = require('http');

const PORT = 7000;
const PORT2 = 7500;

const handleRequest = (request, response) => {
  response.end(`You Can Do This ${request.url}`);
};

const handleRequest2 = (request, response) => {
    response.end(`You got this ${request.url}`);
};

const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

server2.listen(PORT2, () => {
    console.log(`server listening on: http://localhost:${PORT2}`);
});