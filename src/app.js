require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();


const indexRoute = require('./routes/index-route');
const consultaRoute = require('./routes/consulta-route');

app.use('/', indexRoute);
app.use('/consulta', consultaRoute);

module.exports = app;