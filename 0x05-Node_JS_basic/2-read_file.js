// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');
        
        // Split the file into lines and remove empty lines
        const lines = data.trim().split('\n').filter(line => line.trim().length > 0);
        
        // Remove the header line
        const header = lines.shift();
        
        // Initialize student count and field map
        const students = {};
        let totalStudents = 0;

        // Process each line
        for (const line of lines) {
            // Split the line by comma to get student details
            const [firstname, lastname, age, field] = line.split(',');

            if (!students[field]) {
                students[field] = [];
            }

            students[field].push(firstname);
            totalStudents++;
        }

        // Log the total number of students
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students in each field and the list of their first names
        for (const [field, names] of Object.entries(students)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
