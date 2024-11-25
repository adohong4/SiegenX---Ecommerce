'use strict'

const express = require('express')
const UserController = require('../../controllers/user.controller')
const { asyncHandler } = require('../../middleware/checkAuth')
const router = express.Router()

//signUp && Sign in
router.post('/user/signup', asyncHandler(UserController.signUp))
router.post('/user/login', asyncHandler(UserController.login))

//authentication

module.exports = router
