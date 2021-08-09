const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// LIst of columns for Employee schema
let Employee = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", Employee);
