'use strict'

const express = require('express')

const { asyncHandler } = require('../../helpers/asyncHandler')
const cartController = require('../../controllers/cart.controller')
const { authMiddleware } = require('../../middleware/checkAuth')

const router = express.Router()

//changeInfo User && get all info user
router.post('/profile/cart/add', authMiddleware, asyncHandler(cartController.addToCart))
router.post('/profile/cart/addQuantity', authMiddleware, asyncHandler(cartController.addQuantityToCart))

router.post('/profile/cart/remove', authMiddleware, asyncHandler(cartController.removeFromCart))
router.get('/profile/cart/get', authMiddleware, asyncHandler(cartController.getCart))


module.exports = router;
