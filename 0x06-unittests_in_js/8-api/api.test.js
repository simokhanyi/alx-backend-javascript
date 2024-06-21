const request = require('request');
const { expect } = require('chai');
const api = require('./api'); // Assuming api.js is in the same directory

describe('Index page', () => {
  before((done) => {
    // Wait for the server to start listening before proceeding with tests
    api.on('listening', () => {
      done();
    });
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after((done) => {
    // Close the server after all tests
    api.close(() => {
      console.log('Server closed!');
      done();
    });
  });
});
