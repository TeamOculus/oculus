const mongoose = require('mongoose');

const Order = mongoose.Schema ({
    username: {type: String},
    items: [{
        img: {type: String},
        name: {type: String},
        included: {type: String},
        ships: {type: String}
    }],
    date: {type: String},
    shipped: {type: Boolean},
    totalprice: {type: Number},
    shipping: {
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
})

module.exports = mongoose.model("Order", Order);
