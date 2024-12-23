'use strict'

const express = require('express')

const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')
const orderController = require('../../controllers/order.controller')

const router = express.Router()

router.get('/order/get', asyncHandler(orderController.getOrder))
router.put('/order/updateStatus', asyncHandler(orderController.updateStatusOrder))
router.delete('/order/delete/:id', asyncHandler(orderController.deleteOrder))

module.exports = router;