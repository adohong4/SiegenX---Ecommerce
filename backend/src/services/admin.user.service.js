'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const { getInfoData } = require("../utils")
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")

class AdminService {
    static changeInfo = async ({ userID, username, email, password }) => {
        try {
            console.log(userID)
            //checking is user already exists
            const exists = await userModel.findOne({ email, _id: { $ne: userID } });


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

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await userModel.updateOne(
                { _id: userID },
                {
                    username: username,
                    email: email,
                    password: hashedPassword
                }
            )



            if (newUser.matchedCount === 0) {
                throw new Error('User not found');
            }

            if (newUser.modifiedCount === 0) {
                throw new Error('No changes were made to the user');
            }

            if (newUser) {
                return {
                    metadata: {
                        "userID": userID,
                        "username": username,
                        "password": password
                    }
                };
            }

        } catch (error) {
            // console.log(error);
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
            console.log(userID)

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
}

module.exports = AdminService;
