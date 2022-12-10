const express = require('express');

const postRoute = express.Router();

postRoute.post('/');

module.exports = postRoute;