// 7-http_express.js
const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an instance of an Express application
const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Define a route for the /students endpoint
app.get('/students', (req, res) => {
    const databasePath = process.argv[2];
    
    countStudents(databasePath)
        .then((data) => {
            res.send(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
            res.send('This is the list of our students\nCannot load the database');
        });
});

// Start the server and listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
