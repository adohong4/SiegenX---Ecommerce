'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const validator = require('validator')
const { getInfoData } = require("../utils")
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")
const { createToken } = require("../middleware/authUtils")

class UserService {
    //Login
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

    // Sign Up
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
                throw new Error("User not found");
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

    //get User Address
    static getUserAddress = async ({ userId }) => {
        try {
            const userAddress = await userModel.findById(userId);

            if (!userAddress) {
                throw new Error("User not found");
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
                throw new Error("User not found");
            }

            return {
                message: "Address deleted successfully",
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