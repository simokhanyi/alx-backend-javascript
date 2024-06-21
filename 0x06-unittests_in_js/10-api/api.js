const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint for the root
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint for /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start the server
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = server;
