'use strict';


const path = require('path');
var express = require('express');
const router = express.Router();
const login = require('../controllers/login.controller');


router.get('/login', login.get);

module.exports = router;
