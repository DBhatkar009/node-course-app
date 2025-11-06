//Working on Node.js Server Creating New Node Server
const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

const server = http.createServer((req, res)=>{
 const url = req.url;
 const method = req.method;
 if(url === '/'){
 res.write('<html>');
 res.write('<head><title> Enter A Message </title></head>');
 res.write('<body> <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form> </body>');
 res.write('</html>');
 return res.end();    
 }
 if(url === "/message" && method === 'POST'){
     const body = [];
    req.on('data', (chunk)=>{
       console.log(chunk); 
       body.push(chunk);
    });
    req.on('end', ()=>{
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        fs.writeFileSync('message.txt',message);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
 }
 res.setHeader('Content-type', 'text/html');
 res.write('<html>');
 res.write('<head><title> this is Node Js server </title></head>');
 res.write('<body> Hello there Welcome to the Node App! </body>');
 res.write('</html>');
 res.end();
//  process.exit();
});

server.listen(3000); 
