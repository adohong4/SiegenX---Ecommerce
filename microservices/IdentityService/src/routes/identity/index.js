'use strict'

const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const identityController = require('../../controllers/identity.controller')
const ggController = require('../../controllers/gg.controller')

const router = express.Router()


//signUp && Sign in
router.post('/identity/signup', asyncHandler(identityController.signUp))
router.post('/identity/login', asyncHandler(identityController.login))

//Google login
router.post('/identity/google-login', asyncHandler(ggController.login))

module.exports = router;