'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const { getInfoData } = require("../utils")
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")

class AdminService {
    static changeInfo = async ({ userId, username, password }) => {
        try {
            const user = await userModel.findById(userId);

            if (!user) {
                throw new BadRequestError("Tài khoản không tồn tại");
            }

            const updates = {};

            // Cập nhật tên người dùng
            if (username) {
                updates.username = username;
            }

            // Cập nhật mật khẩu nếu có
            if (password) {
                if (password.length < 8) {
                    throw new BadRequestError("Mật khẩu phải dài ít nhất 8 ký tự");
                }
                const salt = await bcrypt.genSalt(10);
                updates.password = await bcrypt.hash(password, salt);
            }

            // Cập nhật thông tin người dùng trong database
            const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: true });

            if (!updatedUser) {
                throw new BadRequestError("Cập nhật không thành công");
            }

            return { metadata: updatedUser };
        } catch (error) {
            throw error;
        }
    }

    static getAllUser = async () => {
        try {
            // Tìm tất cả người dùng và chỉ lấy các trường _id, username, email
            const users = await userModel.find({}, '_id username email');

            if (!users || users.length === 0) {
                throw new BadRequestError('No users found');
            }

            return {
                status: 200,
                message: "Users fetched successfully",
                metadata: {
                    users: users
                }
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestError('Error fetching users');
        }
    }

    static deleteUser = async ({ userID }) => {
        try {

            const deletedUser = await userModel.findByIdAndDelete({ _id: userID })

            if (deletedUser.deletedCount === 0) {
                throw new Error('User not found or already deleted');
            }

            return {
                metadata: {
                    deletedCount: deletedUser.deletedCount
                }
            };
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }

    static getUsersByEmail = async (email, skip, limit) => {
        return userModel
            .find({ email: { $regex: email, $options: 'i' } })
            .skip(skip)
            .limit(limit);
    };


    static countDocumentsByEmail = async (email) => {
        return userModel.countDocuments({ email: { $regex: email, $options: 'i' } });
    };

    static countUser = async () => {
        return await userModel.countDocuments();
    }
}

module.exports = AdminService;
