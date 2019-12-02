const express = require('express');
const db = require('./db');

const routes = require('./api/routes');

const app = express();

const port = process.env.SERVER_PORT || 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use('/', routes);

app.listen(port, function () {
    console.log(`API Host: localhost:${port}`);
});
