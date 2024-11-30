'use strict'

const express = require('express');
const router = express.Router();

router.use('/v1/api', require('./user'));
router.use('/v1/api', require('./shop/products'));
router.use('/v1/api', require('./shop'))
router.use('/v1/api', require('./statistical'))
router.use('/v1/api', require('./admin'))
module.exports = router;


