'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const validator = require('validator')
const { getInfoData } = require("../utils")
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")
const { createToken } = require("../middleware/authUtils")

class IdentityService {
    //Login
    static login = async ({ email, password }) => {
        try {
            const user = await userModel.findOne({ email });

            if (!user) {
                throw new BadRequestError("Tài khoản không tồn tại");
            }

            const isMath = await bcrypt.compare(password, user.password);

            if (!isMath) {
                throw new BadRequestError("Mật khẩu không chính xác");
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
            throw error;
        }
    }

    // Sign Up
    static signUp = async ({ username, email, password }) => {
        try {
            //checking is user already exists
            const exists = await userModel.findOne({ email });
            if (exists) {
                throw new BadRequestError('Email đã được đăng ký, vui lòng chọn email khác')
            }

            //validating email format & strong password
            if (!validator.isEmail(email)) {
                throw new BadRequestError('Không đúng định dạng email')
            }

            if (password.length < 8) {
                throw new BadRequestError('Mật khẩu quá yếu, cần ít nhất 8 ký tự')
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
}

module.exports = IdentityService;