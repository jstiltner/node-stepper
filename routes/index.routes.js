'use strict';

const express = require('express');
const router = express.Router();

const login = require('./login.routes');
const user = require('./userInfo.routes');
const api = require('./api.routes');

router.use(login);
router.use(user);
router.use(api);

module.exports = router;
