const express = require('express');
const app = express();

// Endpoint for the root
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for /cart/:id
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  
  // Validate if id is a number using regex
  if (/^\d+$/.test(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Invalid cart ID');
  }
});

// Start the server
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = server;
