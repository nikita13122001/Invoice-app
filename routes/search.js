const express = require('express');
const routes = express.Router();
const searchController = require('../controllers/search');
routes.post('/search',searchController.search);

module.exports = routes;