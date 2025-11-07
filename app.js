//Working on Node.js Server Creating New Node Server
const http = require('http');

const routes = require('./routes');
// const { buffer } = require('stream/consumers');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000); 
