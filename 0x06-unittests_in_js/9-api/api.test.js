const request = require('request');
const { expect } = require('chai');
const server = require('./api'); // Import the server instance

describe('Index page', () => {
  // Existing tests for the root endpoint (/)

  // New test suite for /cart/:id endpoint
  describe('/cart/:id', () => {
    it('Correct status code when :id is a number?', (done) => {
      request('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response && response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
      request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response && response.statusCode).to.equal(404);
        expect(body).to.equal('Invalid cart ID');
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
