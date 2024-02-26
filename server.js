require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { userService, orderService, menuService } = require("./services");
const app = express();

const options = {
  origin: "*",
};
app.use(cors(options));

//body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookies
app.use(cookieParser());

//routes
app.use("/v1", routes);

//ejs
app.set("view engine", "ejs");

// public for img
app.use(express.static('public'));

/* pages */
/* index */
app.get("/", (req, res) => {
  res.render("./index.ejs");
});

/* register */
app.get("/signup", (req, res) => {
  res.render("./signup.ejs");
});

/* login */
app.get("/login", (req, res) => {
  res.render("./login.ejs");
});

/* Add Menu */
app.get("/addmenu", (req, res) => {
  res.render("./addmenu.ejs");
});

/* Add Restorant */
app.get("/addrest", (req, res) => {
  res.render("./addrest.ejs");
});

/* Add payment */
app.get("/addpayment", (req, res) => {
  res.render("./addpayment.ejs");
});

/* Add order */
app.get("/addorder", (req, res) => {
  res.render("./addorder.ejs");
});

/* Add data */
app.get("/userdata", async (req, res) => {
  let user = await userService.getUser();
  res.render("./data.ejs", { message: user });
});

app.get("/menulist", async (req, res) => {
  let Menu = await menuService.getMenu();
  res.render('./menulist.ejs',{message:Menu}) 

});
// app.get('/',async (req,res)=>{

//   let Menu = await menuService.getMenu() 

//   res.render('./allmenu',{message:Menu})
// })
//DB connect
connectDB();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started scuucess on 1310"); 
});
