'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const { getInfoData } = require("../utils")
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")

class UserService {

    static login = async ({ email, password }) => {
        try {
            const user = await userModel.findOne({ email });

            if (!user) {
                throw new BadRequestError("User doesn't exist");
            }

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

            //return db
            const newUser = await userModel.create({
                username: username,
                email: email,
                password: password
            })

            if (newUser) {
                return {
                    code: 201,
                    metadata: {
                        user: getInfoData({ fileds: ['_id', 'username', 'email'], object: newUser }),
                    }
                }
            }
            return {
                code: 200,
                metadata: null
            }

        } catch (error) {
            console.log(error);
            throw new BadRequestError('Error')
        }
    }
}

module.exports = UserService;