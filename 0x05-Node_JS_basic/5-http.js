// 5-http.js
const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (reqUrl.pathname === '/students') {
        const databasePath = process.argv[2];

        countStudents(databasePath)
            .then((data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`This is the list of our students\n${data}`);
            })
            .catch((error) => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('This is the list of our students\nCannot load the database');
            });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;
