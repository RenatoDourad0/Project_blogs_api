const express = require('express');

const categoriesRoute = express.Router();

categoriesRoute.post('/');

module.exports = categoriesRoute;