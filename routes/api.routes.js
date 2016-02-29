'use strict';


const path = require('path');
var express = require('express');
const router = express.Router();
const api = require('../controllers/api.controller');

router.get('/api/:username', api.get);
router.get('/api/', api.get);
module.exports = router;
