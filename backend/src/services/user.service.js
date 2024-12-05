'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const validator = require('validator')
const { getInfoData } = require("../utils")
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")
const { createToken } = require("../middleware/authUtils")

class UserService {

    static login = async ({ email, password }) => {
        try {
            const user = await userModel.findOne({ email });

            if (!user) {
                throw new BadRequestError("User doesn't exist");
            }

            const isMath = await bcrypt.compare(password, user.password);

            if (!isMath) {
                return res.json({ success: false, message: "Invalid credentials" })
            }

            const token = createToken(user._id);
            return {
                user: {
                    id: user._id,
                    email: user.email,
                },
                token,
            };

        } catch (error) {
            console.log(error);
            throw new BadRequestError('Error');
        }
    }

    static signUp = async ({ username, email, password }) => {
        try {
            //checking is user already exists
            const exists = await userModel.findOne({ email });
            if (exists) {
                throw new BadRequestError('User already registered!')
            }

            //validating email format & strong password
            if (!validator.isEmail(email)) {
                throw new BadRequestError('Please enter valid email')
            }

            if (password.length < 8) {
                throw new BadRequestError('Please enter strong password')
            }

            //hashing user password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt);

            //return db
            const newUser = await userModel.create({
                username: username,
                email: email,
                password: hashedPassword
            })
            const token = createToken(newUser._id)

            if (newUser) {
                return {
                    metadata: {
                        user: getInfoData({ fileds: ['_id', 'username', 'email'], object: newUser }),
                        token
                    }
                }
            }
            return null;

        } catch (error) {
            // console.log(error);
            throw error;
        }
    }

    static addUserAddress = async ({ userId, fullname, phone, street, precinct, city, province }) => {
        try {
            const newAddress = {
                fullname: fullname,
                phone, street, precinct, city, province
            };

            const user = await userModel.findByIdAndUpdate(
                userId,
                { $push: { address: newAddress } }, // Sử dụng 'address' thay vì 'addresses'
                { new: true, runValidators: true } // Thêm runValidators để đảm bảo dữ liệu hợp lệ
            );

            if (!user) {
                throw new Error("User not found"); // Ném lỗi nếu không tìm thấy người dùng
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

    static getAllUsers = async () => {
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

}

module.exports = UserService;