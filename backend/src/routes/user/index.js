'use strict'

const express = require('express')
const UserController = require('../../controllers/user.controller')
const { asyncHandler } = require('../../middleware/checkAuth')
const router = express.Router()

//signUp && Sign in
router.post('/user/signup', asyncHandler(UserController.signUp))
router.post('/user/login', asyncHandler(UserController.login))


// router.put('/user/changeInfo/:id', asyncHandler(UserController.changeInfo))
router.get('/user/getAllUsers', asyncHandler(UserController.getAllUsers))

//authentication

module.exports = router
