'use strict'

const express = require('express');
const router = express.Router();

router.use('/v1/api', require('./user'));
router.use('/v1/api', require('./shop/products'));
router.use('/v1/api', require('./shop'));
router.use('/v1/api', require('./statistical'));
router.use('/v1/api', require('./admin'));
router.use('/v1/api', require('./contact'));
router.use('/v1/api', require('./cart'));

module.exports = router;


