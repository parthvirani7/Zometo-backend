const mongoose = require("mongoose");

module.exports.connectDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};
