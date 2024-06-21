/**
 * Performs arithmetic operations based on the type provided.
 * @param {string} type - Type of arithmetic operation ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number|string} Result of the arithmetic operation or 'Error' if division by zero.
 * @throws {Error} Throws an error if type is invalid.
 */
const calculateNumber = (type, a, b) => {
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
};

module.exports = { calculateNumber };
