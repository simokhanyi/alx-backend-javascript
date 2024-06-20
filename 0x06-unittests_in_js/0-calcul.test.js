const assert = require('assert');
const calculateNumber = require('./0-calcul');

/**
 * Test suite for the calculateNumber function.
 */
describe('calculateNumber', () => {
  /**
   * Test case to check the function when both inputs are integers.
   */
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  /**
   * Test case to check the function when the second input is a float.
   */
  it('should return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  /**
   * Test case to check the function when both inputs are floats.
   */
  it('should return 5 when inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  /**
   * Test case to check the function when both inputs are rounded up.
   */
  it('should return 6 when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  /**
   * Test case to check the function when both inputs round to 0.
   */
  it('should return 0 when inputs are 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  /**
   * Test case to check the function with negative numbers.
   */
  it('should return -2 when inputs are -1.4 and -0.7', () => {
    assert.strictEqual(calculateNumber(-1.4, -0.7), -2);
  });

  /**
   * Test case to check the function when the first input rounds down and the second input rounds up.
   */
  it('should return 2 when inputs are 1.4 and 0.5', () => {
    assert.strictEqual(calculateNumber(1.4, 0.5), 2);
  });
});
