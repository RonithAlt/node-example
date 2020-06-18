// Express initialization
var express = require('express');
var app = express();

// Postgres initialization, setting up a connection to a Postgres database on Heroku
/*const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
client.connect();*/

app.get('/', function (request, response) {
  response.set('Content-Type', 'text/html');
  response.send('<p>Hey, it works!</p>');
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 3000);