// full_server/utils.js
import fs from 'fs/promises';

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
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

export default readDatabase;
