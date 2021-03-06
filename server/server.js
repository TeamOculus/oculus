var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var config = require('./config')

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static(__dirname + './../dist'));

mongoose.connect(config.mongo);
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

const User = require('./schemas/User');
const Order = require('./schemas/Order');


app.post('/api/stripe', (req, res) => {
  console.log("start", req.body);
  console.log("end")

  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  var stripe = require("stripe")(config.stripesk);

  // Get the credit card details submitted by the form
  var token = req.body.token.id; // Using Express

  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
    amount: req.body.cost*100, // Amount in cents
    currency: "usd",
    source: token,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      "card declined"
    }
  });

})

app.post('/api/users', (req,res) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  })
})

app.post('/api/users/login', (req,res) => {
  // res.redirect('http://localhost:4200/my/profile'); note: will need to add this in later to hide the username and password from the url
  User.findOne({email: req.body.email, password: req.body.password}, (err, result) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  })
})

app.get('/api/users/:username', (req,res) => {
  // first is query, second is projection (what u want back) 1 for show 0 for not show, third is callback
  User.find({username: req.params.username}, {}, (err, result) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  })
})

app.get('/api/orders/:username', (req, res) => {
  Order.find({username: req.params.username}, {}, (err, result) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  })
})

// $push: {<fieldname>: <value>}

app.put('/api/users/:username/addtocart', (req,res) => {
  // 1. who u want to replace, 2. wwhat u want to update, 3. if u want to get something back, 4. callback
  // findOneAndUpdate is Mongoose command
  User.findOneAndUpdate({username: req.params.username}, {$push: {savedcart : {
    img: req.body.img,
    name: req.body.name,
    included: req.body.included,
    ships: req.body.ships,
    price: req.body.price
  } }}, {}, (err, result) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.send(result);
    } 
  })
})

app.put('/api/users/:username/removefromcart', (req,res) => {
  // 1. who u want to replace, 2. wwhat u want to update, 3. if u want to get something back, 4. callback
  // findOneAndUpdate is Mongoose command
  User.findOneAndUpdate({username: req.params.username}, {$pull: {savedcart : {
    img: req.body.img,
    name: req.body.name,
    included: req.body.included,
    ships: req.body.ships,
    price: req.body.price
  } }}, {}, (err, result) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.send(result);
    } 
  })
})

app.post('/api/orders', (req,res) => {
  const order = new Order(req.body);
  order.save((err, result) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  })
})

app.put('/api/resetcart/:username', (req,res) => {
  // 1. who u want to replace, 2. wwhat u want to update, 3. if u want to get something back, 4. callback
  // findOneAndUpdate is Mongoose command
  User.findOneAndUpdate({username: req.params.username}, {$set: {savedcart : [] }}, {}, (err, result) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.send(result);
    } 
  })
})


// app.delete('/api/users/:username', (req, res) => {
//   User.remove({username: req.params.username}, (err, result) => {
//     if (err){
//       res.status(500).send(err);
//     } else {
//       res.send(result);
//     }
//   })
// })

// This won't work yet, but to show you how to connect documents/collections: 
/*
const Product = require(./schemas/Model);

insert products

when you want to put a product in the user's cart, you'll just put the product id
User.findOneAndUpdate({username: req.params.username}, {$push: {cart: req.params._id}})

You'll have a cart full of ids


Now when you find the user, you'll want to populate the cart
User.find({username: req.params.username})
  .populate("cart")
  .exec((err, result) => {
    return res.status(200).json(result)
  })

*/

app.listen(port, function(){
  console.log("listening on port", port)
})

module.exports = app;