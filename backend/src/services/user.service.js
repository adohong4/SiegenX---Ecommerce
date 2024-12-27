'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")

class UserService {
    //add User Address
    static addUserAddress = async ({ userId, fullname, phone, street, precinct, city, province }) => {
        try {
            const newAddress = {
                fullname: fullname,
                phone, street, precinct, city, province
            };

            const user = await userModel.findByIdAndUpdate(
                userId,
                { $push: { address: newAddress } },
                { new: true, runValidators: true }
            );

            if (!user) {
                throw new BadRequestError("Tài khoản không tồn tại");
            }

            return {
                metadata: {
                    addresses: user.address,
                }
            }
        } catch (error) {
            throw error;
        }
    }

    static getProfile = async (userId) => {
        try {
            const user = await userModel.findById(userId);

            if (!user) {
                throw new BadRequestError("Tài khoản không tồn tại");
            }

            const filteredUser = {
                username: user.username,
                email: user.email,
            };

            return { metadata: filteredUser };
        } catch (error) {
            throw error
        }
    }

    static updateProfile = async ({ userId, username, password }) => {
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

    //get User Address
    static getUserAddress = async ({ userId }) => {
        try {
            const userAddress = await userModel.findById(userId);

            if (!userAddress) {
                throw new BadRequestError("Tài khoản không tồn tại");
            }

            return {
                metadata: {
                    addresses: userAddress.address,
                }
            };
        } catch (error) {
            throw error;
        }
    }

    static deleteUserAddress = async ({ userId, addressId }) => {
        try {
            const user = await userModel.findByIdAndUpdate(userId,
                { $pull: { address: { _id: addressId } } }, { new: true }
            );

            if (!user) {
                throw new BadRequestError("Tài khoản không tồn tại");
            }

            return {
                message: "Xóa địa chỉ thành công",
                metadata: {
                    addresses: user.address,
                }
            };
        } catch (error) {
            throw error;
        }
    }



}

module.exports = UserService;