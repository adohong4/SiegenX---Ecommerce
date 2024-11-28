'use strict'

const express = require('express')
const router = express.Router()

router.use('/v1/api', require('./user'))
router.use('/v1/api', require('./shop'))

module.exports = router