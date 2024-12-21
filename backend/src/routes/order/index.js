'use strict'

const express = require('express')

const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')
const orderController = require('../../controllers/order.controller')

const router = express.Router()

router.get('/order/get', asyncHandler(orderController.getOrder))


module.exports = router;