// 3-read_file_async.js
const fs = require('fs').promises;

function countStudents(path) {
    return fs.readFile(path, 'utf8')
        .then((data) => {
            const lines = data.trim().split('\n').filter(line => line.trim().length > 0);
            const header = lines.shift();
            const students = {};
            let totalStudents = 0;

            for (const line of lines) {
                const [firstname, lastname, age, field] = line.split(',');

                if (!students[field]) {
                    students[field] = [];
                }

                students[field].push(firstname);
                totalStudents++;
            }

            let result = `Number of students: ${totalStudents}\n`;
            for (const [field, names] of Object.entries(students)) {
                result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            }

            return result.trim();
        })
        .catch(() => {
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;
