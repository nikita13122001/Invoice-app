const express = require('express');
const routes = express.Router();
const addController = require('../controllers/add');
routes.post('/add',addController.add);

module.exports = routes;