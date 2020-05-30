'use strict'

var express = require('express');
var ClientCtrl = require('../controllers/client');

var api = express.Router();

api.get('/client', ClientCtrl.getClients);
api.post('/addClient', ClientCtrl.addClient);

module.exports = api;