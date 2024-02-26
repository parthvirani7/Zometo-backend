const express = require("express");
const validate = require("../middlewares/validate");
const { restController } = require("../controllers");
const restValidation  = require("../validation/rest.validation")
const route = express.Router();

route.get("/get", restController.getRest);
route.post("/add", validate(restValidation.addRest), restController.addRest);
route.put(
  "/update/:id",
  validate(restValidation.addRest),
  restController.updateRest
);
route.delete(
  "/delete/:id",
  validate(restValidation.addRest),  
  restController.deleteRest
);

module.exports = route;
