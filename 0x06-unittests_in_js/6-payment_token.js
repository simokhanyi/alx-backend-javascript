/**
 * Simulates fetching a payment token from an API.
 * @param {boolean} success - Indicates whether the API call should succeed.
 * @returns {Promise<object>} A Promise that resolves to an object if success is true, otherwise resolves to undefined.
 */
const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve(); // Resolving with undefined if success is false
    }
  });
};

module.exports = { getPaymentTokenFromAPI };
