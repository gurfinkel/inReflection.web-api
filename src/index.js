const express = require('express');
const app = express();

const routes = require('./api/routes');

const port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port, function () {
    console.log(`API Host: localhost:${port}`);
});
