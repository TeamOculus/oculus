var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var config = require('./config')

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.mongo);
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

const User = require('./schemas/User');

app.post('/api/users', (req,res) => {
  console.log("post being hit", req.body)
  const user = new User(req.body);
  
  user.save((err, result) => {
    if (err){
      console.log(err)
      res.status(500).send(err);
    } else {
      console.log(result)
      res.send(result);
    }
  })
})

app.get('/api/users/:username', (req,res) => {
  // first is query, second is projection (what u want back) 1 for show 0 for not show, third is callback
  User.find({username: req.params.username}, {}, (err, result) => {
    if (err){
      console.log(err)
      res.status(500).send(err);
    } else {
      console.log(result)
      res.send(result);
    }
  })
})

// $push: {<fieldname>: <value>}

app.put('/api/users/:username', (req,res) => {
  // 1. who u want to replace, 2. wwhat u want to update, 3. if u want to get something back, 4. callback
  // findOneAndUpdate is Mongoose command
  User.findOneAndUpdate({username: req.params.username}, {$set: {username: "testusername", password: "testpassword"}}, {new: true}, (err, result) => {
    if (err){
      console.log(err)
      res.status(500).send(err);
    } else {
      console.log(result)
      res.send(result);
    } 
  })
})

app.delete('/api/users/:username', (req, res) => {
  User.remove({username: req.params.username}, (err, result) => {
    if (err){
      console.log(err)
      res.status(500).send(err);
    } else {
      console.log(result)
      res.send(result);
    }
  })
})

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