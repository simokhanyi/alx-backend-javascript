const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

/**
 * Reads the database file asynchronously and returns an object of arrays of first names of students per field.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<Object>} - A promise that resolves to an object containing arrays of first names per field.
 * @throws {Error} - Throws an error if the database cannot be loaded.
 */
async function readDatabase(filePath) {
    try {
        const data = await readFile(filePath, 'utf8');
        const lines = data.trim().split('\n').filter(line => line.trim().length > 0);
        const header = lines.shift();
        const students = {};

        for (const line of lines) {
            const [firstname, lastname, age, field] = line.split(',');

            if (!students[field]) {
                students[field] = [];
            }

            students[field].push(firstname);
        }

        return students;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = readDatabase;
