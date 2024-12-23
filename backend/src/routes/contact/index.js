'use strict'

const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const ContactController = require('../../controllers/contact.controller')
const router = express.Router()

router.post('/contact/add', asyncHandler(ContactController.addContact))
router.get('/contact/get', asyncHandler(ContactController.getContact))

router.get('/contact/pagination', asyncHandler(ContactController.getContactWithPagination));
module.exports = router; 