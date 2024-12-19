'use strict'

const express = require('express')

const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')
const stripeController = require('../../controllers/payment/stripe.controller')

const router = express.Router()

//Payment
router.post('/stripe/place', authMiddleware, asyncHandler(stripeController.placeOrder))
router.post('/stripe/verify', asyncHandler(stripeController.verifyOrder))

module.exports = router;