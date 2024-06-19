const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

app.use((req, res, next) => {
    req.params.database = process.argv[2];
    next();
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
