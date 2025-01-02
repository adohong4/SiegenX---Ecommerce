'use strict'

const express = require('express')

const { asyncHandler } = require('../../helpers/asyncHandler')
const { authMiddleware } = require('../../middleware/checkAuth')
const orderController = require('../../controllers/order.controller')
const statisticalController = require('../../controllers/statistical.controller')

const router = express.Router()

router.get('/profile/order/get', asyncHandler(orderController.getOrder))

router.put('/profile/order/updateStatus', asyncHandler(orderController.updateStatusOrder))
router.delete('/profile/order/delete/:id', asyncHandler(orderController.deleteOrder))

router.get('/profile/order/userOrder', authMiddleware, asyncHandler(orderController.userOrder))

router.get('/profile/order/pagination', asyncHandler(orderController.getOrderWithPagination));
router.get('/profile/order/id', asyncHandler(orderController.getOrderByID));

// Statistical
router.get('/profile/order/statistical', asyncHandler(statisticalController.getTotalAmountLast7Days));

module.exports = router;