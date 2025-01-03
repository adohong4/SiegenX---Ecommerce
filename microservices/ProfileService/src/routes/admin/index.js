'use strict'

const express = require('express')
const AdminController = require('../../controllers/admin.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const router = express.Router()

//changeInfo User && get all info user
router.put('/profile/admin/changeInfo/:id', asyncHandler(AdminController.changeInfo))
router.get('/profile/admin/getAllUser', asyncHandler(AdminController.getAllUser))
router.delete('/profile/admin/deleteUser/:id', asyncHandler(AdminController.deleteUser))

router.get('/profile/admin/users/email', asyncHandler(AdminController.getUsersByEmail));

router.get('/profile/admin/user/count', asyncHandler(AdminController.countUser));

module.exports = router