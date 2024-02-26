const express = require("express");
const validate = require("../middlewares/validate");
const { paymentController } = require("../controllers");
const paymentValidation  = require("../validation/payment.validate");
const route = express.Router();

route.get("/get", paymentController.getPayment);
route.post("/add", validate(paymentValidation.addPayment), paymentController.addPayment);
// route.put(
//   "/update/:id",
//   validate(paymentValidation.addPayment),
//   paymentController.updatePayment
// );
// route.delete(
//   "/delete/:id",
//   validate(paymentValidation.addPayment),  
//   paymentController.deletePayment
// );

module.exports = route;
