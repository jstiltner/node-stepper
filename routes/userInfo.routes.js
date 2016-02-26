'use strict';


const path = require('path');
var express = require('express');
const router = express.Router();
const userInfo = require('../controllers/userInfo.controller');

router.get('/userInfo', userInfo.get);

module.exports = router;
