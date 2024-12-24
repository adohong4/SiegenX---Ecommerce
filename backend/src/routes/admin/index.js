'use strict'

const express = require('express')
const AdminController = require('../../controllers/admin.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const router = express.Router()

//changeInfo User && get all info user
router.put('/admin/changeInfo/:id', asyncHandler(AdminController.changeInfo))
router.get('/admin/getAllUser', asyncHandler(AdminController.getAllUser))
router.delete('/admin/deleteUser/:id', asyncHandler(AdminController.deleteUser))
router.get('/admin/users/email', AdminController.getUsersByEmail);

module.exports = router