'use strict'

const express = require('express')
const CartController = require('../../controllers/cart.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const router = express.Router()

//authortication

router.post('/cart/addToCart', asyncHandler(CartController.addToCart))
router.post('/cart/removeFromCart', asyncHandler(CartController.removeFromCart))
router.post('/cart/getCart', asyncHandler(CartController.getCart))



module.exports = router