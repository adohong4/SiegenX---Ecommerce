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

    deleteAddress = async (req, res) => {
        const userId = req.body.userId; // Sử dụng optional chaining
        const addressId = req.params.addressId;

        try {
            // Tìm người dùng
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Xóa địa chỉ
            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { address: { _id: addressId } } },
                { new: true }
            );

            return res.status(200).json({ message: 'Xóa địa chỉ thành công', addressId });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
    };
}

module.exports = new UserController();