require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const { loginRoute } = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginRoute);

module.exports = app;
