const express = require('express'); 
const route = express.Router();

const UserController = require('../app/controllers/UserController');

route.get('/list', UserController.list);

module.exports = route;