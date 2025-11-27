//Working on Node.js Server Creating New Node Server
// npm init  ...for node packages
// const routes = require('./routes'); // installing nodemon. npm install --save nodemon
const express = require('express'); // installing express. npm install --save express
const bodyParser = require('body-parser');// npm install --save body-parser
const adminRouter = require('./routes/admin'); 
const shopRouter = require('./routes/shop');
const path = require('path');
// const rootDir = require('./helper/path');
const { buffer } = require('stream/consumers');

const app = express();

// npm install --save ejs pug express-handlebars 
app.set('view engine','pug');
app.set('views', 'view');
//...node js middleware method.
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter.routes);
app.use(shopRouter);

//Unkown path status code Page not found
app.use((req, res, next)=>{
   res.status(404).sendFile(path.join(__dirname, 'view', 'Error404.html'));
})


app.listen(3000); 
