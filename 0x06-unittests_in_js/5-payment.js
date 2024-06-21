const Utils = require('./utils');

/**
 * Sends a payment request to an API using Utils.calculateNumber.
 * @param {number} amount - The amount to be paid.
 * @param {number} rate - The rate of payment.
 */
const sendPaymentRequestToApi = (amount, rate) => {
  const total = Utils.calculateNumber('SUM', amount, rate);
  console.log(`The total is: ${total}`);
};

module.exports = sendPaymentRequestToApi;
