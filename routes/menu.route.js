const express = require("express");
const validate = require("../middlewares/validate");
const { menuController } = require("../controllers");
const menuValidation  = require("../validation/menu.validate");
const route = express.Router();

route.get("/get", menuController.getMenu);
route.post("/add", validate(menuValidation.addMenu), menuController.addMenu);
route.put(
  "/update/:id",
  validate(menuValidation.addMenu),
  menuController.updateMenu
);
route.delete(
  "/delete/:id",
  validate(menuValidation.addMenu),  
  menuController.deleteMenu
);

module.exports = route;
