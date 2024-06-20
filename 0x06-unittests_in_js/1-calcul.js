/**
 * Function that performs arithmetic operations on two rounded numbers.
 * @param {string} type - The type of operation (SUM, SUBTRACT, or DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation or 'Error' if division by zero.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  } else {
    throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
