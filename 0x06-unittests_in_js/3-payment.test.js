const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment'); // Ensure correct file path

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(bigBrother.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.callCount).to.be.equal(1);

    bigBrother.restore();
  });
});
