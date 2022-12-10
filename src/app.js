require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const { loginRoute, userRoute, categoriesRoute, postRoute } = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute); 
app.use('/post', postRoute); 

module.exports = app;
