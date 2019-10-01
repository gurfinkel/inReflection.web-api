const express = require('express');
const app = express();

const routes = require('./api/routes');

const port = 8080;

app.use('/', routes);

app.listen(port, function () {
    console.log(`API Host: localhost:${port}`);
});
