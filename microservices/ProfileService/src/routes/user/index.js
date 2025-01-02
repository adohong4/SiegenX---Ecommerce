'use strict'

const express = require('express')
const UserController = require('../../controllers/user.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')

const router = express.Router()

//User Profile
router.get('/profile/getProfile', authMiddleware, asyncHandler(UserController.getUserProfile));
router.put('/profile/updateProfile', authMiddleware, asyncHandler(UserController.updateUserProfile));

router.post('/profile/addAddress', authMiddleware, asyncHandler(UserController.addUserAddress));
router.get('/profile/getAddress', authMiddleware, asyncHandler(UserController.getUserAddress));
router.delete('/profile/deleteAddress/:addressId', authMiddleware, asyncHandler(UserController.deleteUserAddress));

//phan trang nguoi dung
router.get('/profile/pagination', asyncHandler(UserController.getUsersWithPagination));
module.exports = router;

