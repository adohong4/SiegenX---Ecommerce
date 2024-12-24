'use strict'

const UserService = require("../services/user.service")
const { OK, CREATED, SuccessResponse } = require('../core/success.response')
const User = require('../models/user.model');

class UserController {

    getUserProfile = async (req, res, next) => {
        try {
            const result = await UserService.getProfile(req.body.userId);
            new CREATED({
                message: 'Lấy thông tin User thành công',
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    updateUserProfile = async (req, res, next) => {
        try {
            const { userId, username, password } = req.body;
            const result = await UserService.updateProfile({ userId, username, password });
            new CREATED({
                message: 'Cập nhật thông tin User thành công',
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    addUserAddress = async (req, res, next) => {
        try {
            const result = await UserService.addUserAddress(req.body);

            new CREATED({
                message: 'Thêm địa chỉ thành công',
                metadata: result.metadata
            }).send(res);


        } catch (error) {
            next(error);
        }
    };

    getUserAddress = async (req, res, next) => {
        try {
            const result = await UserService.getUserAddress(req.body);

            new OK({
                message: 'Lấy địa chỉ thành công',
                metadata: result.metadata
            }).send(res);


        } catch (error) {
            next(error);
        }
    };

    deleteUserAddress = async (req, res, next) => {
        try {
            const { addressId } = req.params;
            const userId = req.user.id

            const result = await UserService.deleteUserAddress({ userId, addressId });
            new OK({
                message: 'Xóa địa chỉ thành công',
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);

        }
    };


    getUsersWithPagination = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const skip = (page - 1) * limit;

            const totalUsers = await User.countDocuments();

            const users = await User.find()
                .skip(skip)
                .limit(limit)
                .select('-password')
                .lean();

            res.status(200).json({
                message: 'Users fetched successfully',
                data: users,
                pagination: {
                    total: totalUsers,
                    currentPage: page,
                    totalPages: Math.ceil(totalUsers / limit),
                    limit,
                },
            });
        } catch (error) {
            next(error);

        }
    };
}

module.exports = new UserController();