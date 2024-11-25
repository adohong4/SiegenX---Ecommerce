'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")

class UserService {
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
            const newUser = new userModel({
                username: username,
                email: email,
                password: password
            })

            await newUser.save()


        } catch (error) {
            console.log(error);
            throw new BadRequestError('Error')
        }
    }
}

module.exports = UserService;