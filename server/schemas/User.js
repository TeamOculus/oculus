const mongoose = require('mongoose');

const User = mongoose.Schema ({
  firstname: {type: String},
  lastname: {type: String},
  email: {type: String},
  username: {type: String},
  password: {type: String},
  // cart: [{type: mongoose.Schema.ObjectId}]
})

module.exports = mongoose.model("User", User);
