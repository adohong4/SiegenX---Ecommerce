'use strict';

const StatisticalService = require('../services/statistical.service');
const { OK, CREATED, SuccessResponse } = require('../core/success.response');

class StatisticalController {
    getQuantityUsers = async (req, res, next) => {

        try {
            const result = await StatisticalService.getQuantityUser();
            new SuccessResponse({
                message: "Get quantity of users successfully",
                metadata: result,
            }).send(res);
        } catch (error) {
            next(error);
        }

    };

    getQuantityProducts = async (req, res, next) => {

        try {
            const result = await StatisticalService.getQuantityProduct();
            new SuccessResponse({
                message: "Get quantity of products successfully",
                metadata: result,
            }).send(res);
        } catch (error) {
            next(error);
        }

    }

    getTotalRevenue = async (req, res, next) => {
        try {
            const result = await StatisticalService.getTotalRevenue(req); // Truyền `req` vào service
            new SuccessResponse({
                message: "Get total revenue successfully",
                metadata: result, // Trả về kết quả từ service
            }).send(res);
        } catch (error) {
            console.error("Controller error:", error.message);
            next(error); // Đẩy lỗi đến middleware xử lý lỗi
        }
    };

}
module.exports = new StatisticalController();