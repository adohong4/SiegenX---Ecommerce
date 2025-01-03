'use strict'

const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const ContactController = require('../../controllers/contact.controller')
const router = express.Router()

//client
router.post('/contact/add', asyncHandler(ContactController.addContact))

//admin
router.get('/contact/get', asyncHandler(ContactController.getContact))
router.delete('/contact/delete/:id', asyncHandler(ContactController.deleteContact))
router.put('/contact/updateCheck/:id', asyncHandler(ContactController.updateContactIsCheck))
router.get('/contact/pagination', asyncHandler(ContactController.getContactWithPagination));
router.get('/contacts/email', ContactController.getContactsByEmail);

router.get('/contact/count', asyncHandler(ContactController.countContact));

module.exports = router; 