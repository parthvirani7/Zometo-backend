const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const menuRoute = require("./menu.route");
const restRoute = require("./rest.route");
const paymentRoute = require("./payment.route");
const orderRoute = require("./order.route");

route.use("/user", userRoute);
route.use("/menu", menuRoute);
route.use("/restaurant", restRoute);
route.use("/payment", paymentRoute);
route.use("/order", orderRoute);

module.exports = route;
