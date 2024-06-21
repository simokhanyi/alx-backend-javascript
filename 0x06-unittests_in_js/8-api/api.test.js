const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', () => {
  before((done) => {
    server.on('listening', () => {
      console.log('API server is up and running');
      done();
    });
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response && response.statusCode).to.equal(200);
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
    server.close(() => {
      console.log('Server closed!');
      done();
    });
  });
});
