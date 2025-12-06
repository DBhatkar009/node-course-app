//Working on Node.js Server Creating New Node Server
// npm init  ...for node packages always start with this when you created node server
// const routes = require('./routes'); // installing nodemon. npm install --save nodemon
const express = require("express"); // installing express. npm install --save express
const bodyParser = require("body-parser"); // npm install --save body-parser
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const path = require("path");
const prodcutsController = require("./controller/error404");
const { buffer } = require("stream/consumers");
// const expressHBS = require("express-handlebars");

const app = express();

// npm install --save ejs pug express-handlebars
// app.engine(
//   "hbs",
//   expressHBS({
//     layoutsDir: "view/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "view");
//...node js middleware method.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

//Unkown path status code Page not found
app.use(prodcutsController.getError404);

app.listen(3000);
