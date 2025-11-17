//Working on Node.js Server Creating New Node Server
// npm init  ...for node packages
const express = require('express'); // installing express. npm install --save express
const routes = require('./routes'); // installing nodemon. npm install --save nodemon
// const { buffer } = require('stream/consumers');

const app = express();

//...node js middleware method.
app.use((req, res, next)=>{
    console.log('in the middleware');
    next();
});

app.use((req, res, next)=>{
   console.log('in another middleware');
   res.send('<h1> Hello Middleware from Nodejs </h1>');
});

app.listen(3000); 
