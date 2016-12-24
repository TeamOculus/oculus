const mongoose = require('mongoose');

const User = mongoose.Schema ({
  firstname: {type: String},
  lastname: {type: String},
  email: {type: String},
  username: {type: String},
  password: {type: String},
  pastorders: [{
    cart: {
      items: [{
        img: {type: String},
        name: {type: String},
        included: {type: String},
        ships: {type: String}
      }],
      totalprice: {type: Number}
    },
    date: {type: String},
    shipped: {type: Boolean},
    order: {
      firstname: {type: String},
      lastname: {type: String},
      phone: {type: String},
      email: {type: String},
      addresstype: {type: String},
      address: {type: String},
      address2: {type: String},
      city: {type: String},
      stateprovice: {type: String},
      zipcode: {type: String},
      country: {type: String}
    }
  }],
  currentcart: [{
    items: [{
      img: {type: String},
      name: {type: String},
      included: {type: String},
      ships: {type: String}
    }],
    totalprice: {type: Number}
  }]
  // cart: [{type: mongoose.Schema.ObjectId}]
})

module.exports = mongoose.model("User", User);
