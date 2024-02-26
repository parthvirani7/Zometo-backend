const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
  restName: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  charges: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const rest = mongoose.model("restSchema", restSchema);
module.exports = rest;
// 
// <% if (rest) { %>
//   <h1><%=  rest.restName  %></h1>
//  <% } %>