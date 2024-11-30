'use strict';

const express = require('express');
const StatisticalController = require('../../controllers/statistical.controller');
const { asyncHandler } = require('../../helpers/asyncHandler');
const router = express.Router();

router.get('/countProducts', asyncHandler(StatisticalController.getQuantityProducts));

router.get('/countUsers', asyncHandler(StatisticalController.getQuantityUsers));

module.exports = router;