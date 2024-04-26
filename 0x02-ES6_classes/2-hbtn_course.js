/**
 * Represents a Holberton Course.
 */
class HolbertonCourse {
  /**
   * Creates a new Holberton Course.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course.
   * @param {string[]} students - The list of students enrolled in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} value - The name to set.
   * @throws {TypeError} If the name is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of the course.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {number} value - The length to set.
   * @throws {TypeError} If the length is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the list of students enrolled in the course.
   * @returns {string[]} The list of students enrolled in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the list of students enrolled in the course.
   * @param {string[]} value - The list of students to set.
   * @throws {TypeError} If students is not an array of strings.
   */
  set students(value) {
    if (!Array.isArray(value) || value.some(item => typeof item !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
