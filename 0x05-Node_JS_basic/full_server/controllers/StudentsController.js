const readDatabase = require('../utils.js');

/**
 * StudentsController class to handle student-related operations.
 */
class StudentsController {
    /**
     * Handles the GET request to retrieve all students.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(req.params.database);
            let responseText = 'This is the list of our students\n';
            for (const [field, names] of Object.entries(students).sort()) {
                responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            }
            res.status(200).send(responseText.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    /**
     * Handles the GET request to retrieve students by major.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }
        try {
            const students = await readDatabase(req.params.database);
            res.status(200).send(`List: ${students[major].join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
