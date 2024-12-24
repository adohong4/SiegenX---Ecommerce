'use strict'

const express = require('express')

const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')
const stripeController = require('../../controllers/payment/stripe.controller')
const paymentController = require('../../controllers/payment/payment.controller')

const router = express.Router()

//Payment
router.post('/stripe/place', authMiddleware, asyncHandler(stripeController.placeOrder))
router.post('/stripe/verify', asyncHandler(stripeController.verifyOrder))

router.post('/payment/verify', authMiddleware, asyncHandler(paymentController.placeOrder))

module.exports = router;