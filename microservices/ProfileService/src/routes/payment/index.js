'use strict'

const express = require('express')

const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')
const stripeController = require('../../controllers/payment/stripe.controller')
const paymentController = require('../../controllers/payment/payment.controller')

const router = express.Router()

//Payment
router.post('/profile/stripe/place', authMiddleware, asyncHandler(stripeController.placeOrder))
router.post('/profile/stripe/verify', asyncHandler(stripeController.verifyOrder))

router.post('/profile/payment/verify', authMiddleware, asyncHandler(paymentController.placeOrder))

module.exports = router;