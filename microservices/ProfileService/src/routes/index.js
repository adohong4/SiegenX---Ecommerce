'use strict'

const express = require('express');
const router = express.Router();

router.use('/v1/api', require('./user'));

// router.use('/v1/api', require('./statistical'));
router.use('/v1/api', require('./admin'));
router.use('/v1/api', require('./cart'))
router.use('/v1/api', require('./order'))
router.use('/v1/api', require('./payment'))

module.exports = router;