'use strict';

const express = require('express');
const router = express.Router();

const login = require('./login.routes');
const user = require('./userInfo.routes');

router.use(login);
router.use(user);

module.exports = router;
