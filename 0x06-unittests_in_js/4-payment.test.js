const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(() => {
    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore stub and spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call calculateNumber with SUM and correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    // Assert that calculateNumber was called with specific arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
