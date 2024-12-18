'use strict'

const express = require('express');
const router = express.Router();

router.use('/v1/api', require('./product'));
router.use('/v1/api', require('./user'));
// <<<<<<< HEAD
// router.use('/v1/api', require('./statistical'))
// router.use('/v1/api', require('./admin'))
// router.use('/v1/api', require('./contact'))
// =======
router.use('/v1/api', require('./statistical'));
router.use('/v1/api', require('./admin'));
router.use('/v1/api', require('./contact'));

module.exports = router;