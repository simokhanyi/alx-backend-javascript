import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const fields = await readDatabase(req.params.database);
            let response = 'This is the list of our students\n';
            for (const field in fields) {
                response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            }
            res.status(200).send(response.trim());
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const fields = await readDatabase(req.params.database);
            if (!fields[major]) {
                res.status(500).send('Major parameter must be CS or SWE');
                return;
            }
            res.status(200).send(`List: ${fields[major].join(', ')}`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
