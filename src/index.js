const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./api/routes');

const app = express();

const port = process.env.NODE_PORT || 3000;

// parse application/json
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, function () {
    console.log(`API Host: localhost:${port}`);
});
