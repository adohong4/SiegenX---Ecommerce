'use strict'

const express = require('express')
const ContactController = require('../../controllers/contact.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const router = express.Router()

//changeInfo User && get all info user
router.post('/contact/add', asyncHandler(ContactController.addContact))
router.get('/contact/get', asyncHandler(ContactController.getContact))
router.delete('/contact/delete/:id', asyncHandler(ContactController.deleteContact))
router.put('/contact/updateCheck/:id', asyncHandler(ContactController.updateContactIsCheck))


module.exports = router;