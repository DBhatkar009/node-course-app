//Working on Node.js Server Creating New Node Server
// npm init  ...for node packages
const routes = require('./routes'); // installing nodemon. npm install --save nodemon
const express = require('express'); // installing express. npm install --save express
const bodyParser = require('body-parser');// npm install --save body-parser
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
// const { buffer } = require('stream/consumers');

const app = express();

//...node js middleware method.
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);

//Unkown path status code Page not found
app.use((req, res, next)=>{
   res.status(404).send('<h1> Page Not Found </h1>');
})


app.listen(3000); 
