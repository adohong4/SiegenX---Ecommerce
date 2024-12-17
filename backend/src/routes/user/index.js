'use strict'

const express = require('express')
const UserController = require('../../controllers/user.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')

const router = express.Router()


//signUp && Sign in
router.post('/user/signup', asyncHandler(UserController.signUp))
router.post('/user/login', asyncHandler(UserController.login))

//add User address
router.post('/user/addAddress', authMiddleware, asyncHandler(UserController.addUserAddress));
router.get('/user/getAddress', authMiddleware, asyncHandler(UserController.getUserAddress));

//phan trang nguoi dung
router.get('/user/pagination', asyncHandler(UserController.getUsersWithPagination));
module.exports = router;

