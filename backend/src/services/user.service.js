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
            res.json({ success: true, token })

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

            const token = createToken(user._id)
            res.json({ success: true, token });

            if (newUser) {
                return {
                    metadata: {
                        user: getInfoData({ fileds: ['_id', 'username', 'email'], object: newUser }),
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

module.exports = UserService;