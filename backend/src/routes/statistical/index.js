'use strict';

const express = require('express');
const StatisticalController = require('../../controllers/statistical.controller');
const router = express.Router();

router.get('/countProducts', StatisticalController.getQuantityProducts);

router.get('/countUsers', StatisticalController.getQuantityUsers);

module.exports = router;