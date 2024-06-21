const { calculateNumber } = require('./utils');

/**
 * Sends a payment request to an API and logs the total amount.
 * @param {number} totalAmount - Total amount to process.
 * @param {number} totalShipping - Total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
