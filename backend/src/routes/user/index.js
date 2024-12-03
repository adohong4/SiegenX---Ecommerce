'use strict'

const express = require('express')
const UserController = require('../../controllers/user.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const router = express.Router()


//signUp && Sign in
router.post('/user/signup', asyncHandler(UserController.signUp))
router.post('/user/login', asyncHandler(UserController.login))



// router.put('/user/changeInfo/:id', asyncHandler(UserController.changeInfo))
router.get('/user/getAllUsers', asyncHandler(UserController.getAllUsers))

//them dia chi theo id
router.post('/user/:_id/address', asyncHandler(UserController.addAddress));
//phan trang nguoi dung
router.get('/pagination_users', asyncHandler(UserController.getUsersWithPagination));
module.exports = router
