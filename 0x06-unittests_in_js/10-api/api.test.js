const request = require('request');
const { expect } = require('chai');
const server = require('./api'); // Import the server instance

describe('Index page', () => {
  // Existing tests for the root endpoint (/)

  // Test suite for /available_payments endpoint
  describe('/available_payments', () => {
    it('Correct JSON structure and values', (done) => {
      request('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response && response.statusCode).to.equal(200);
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });
  });

  // Test suite for /login endpoint
  describe('/login', () => {
    it('Returns welcome message with username', (done) => {
      const options = {
        method: 'POST',
        url: 'http://localhost:7865/login',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName: 'Betty' })
      };
      request(options, (error, response, body) => {
        expect(response && response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  // After all tests, close the server
  after((done) => {
    server.close(() => {
      console.log('Server closed!');
      done();
    });
  });
});
