const express = require('express');
const mongoose = require('mongoose');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

let customersArray = [];
let customersCollection;

mongoose.connect('mongodb://127.0.0.1/mycustomers');
let db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('MongoDB connected...');
})

// Check for DB errors
db.on('error', (err) =>{
  console.log(err);
})

let Customer = require('./model/customer');

// rest
app.get('/api/customers', (req, res) => {
  Customer.find({}, (err, customers) => {
    if(err)
      console.log(err);
    else
      res.json(customers);
  });
});

app.post('/api/customers', (req, res) => {
  let customer = new Customer();
  customer.firstName = req.body.firstName;
  customer.lastName = req.body.lastName;

  customer.save((err)=>{
    if(err){
      console.log(err);
      return;
    } else {
      console.log('Customer added...');
    }
  });
}); 

// TODO: WS

// PUSH NOTIFICATIONS

// todo: put in an environment variable
const publicVapidKey = 'BAu-ruZLxJUDCEMxLiogWFLmFcJp8Oo9Hu3kpbJrWpp7X7Nm8XFC-OW6PG8itsCZkotCjPUHdndAkVIsyhm_ksI';
const privateVapidKey = 'Hh7Aitp_mE2b_070fZuLpq-HNethI_AEWJwLXBzXiyo';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
  // Get pushSubscribtion object
  const subscribtion = req.body;
});


// TODO: IMAGE UPLOAD

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);