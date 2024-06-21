const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate the async test is complete
      })
      .catch((error) => {
        done(error); // Call done with error if there's an issue
      });
  });

  it('should resolve with undefined when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        expect(result).to.be.undefined;
        done(); // Call done to indicate the async test is complete
      })
      .catch((error) => {
        done(error); // Call done with error if there's an issue
      });
  });
});
