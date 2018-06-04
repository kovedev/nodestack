const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

// rest
app.get('/api/customers', (req, res) => {
  // TODO: Connect to MongoDB
  const customers = [
    {id: 1, firstName: 'One', lastName: 'Man'},
    {id: 2, firstName: 'Jack', lastName: 'Smith'},
    {id: 3, firstName: 'Mary', lastName: 'Jenkins'},
  ];

  res.json(customers);
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