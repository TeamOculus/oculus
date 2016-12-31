const mongoose = require('mongoose');

const User = mongoose.Schema ({
  firstname: {type: String},
  lastname: {type: String},
  email: {type: String},
  username: {type: String},
  password: {type: String},
  savedcart: [{
    img: {type: String},
    name: {type: String},
    included: {type: String},
    ships: {type: String},
    price: {type: Number}
  }]
  // cart: [{type: mongoose.Schema.ObjectId}]
})

module.exports = mongoose.model("User", User);
