//Working on Node.js Server Creating New Node Server
const http = require('http');

const server = http.createServer((req, res)=>{
 console.log(req.url, req.method, req.headers);
 res.setHeader('Content-type', 'text/html');
 res.write('<html>');
 res.write('<head><title> this is Node Js server </title></head>');
 res.write('<body> Hello there Welcome to the Node App! </body>');
 res.write('</html>');
 res.end();
//  process.exit();
});

server.listen(3000); 
