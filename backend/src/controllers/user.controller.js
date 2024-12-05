'use strict'

const UserService = require("../services/user.service")
const { OK, CREATED, SuccessResponse } = require('../core/success.response')
const User = require('../models/user.model');

class UserController {

    login = async (req, res, next) => {
        new SuccessResponse({
            metadata: await UserService.login(req.body)
        }).send(res)
    }

    signUp = async (req, res, next) => {
        try {
            const result = await UserService.signUp(req.body);
            if (result) {
                new CREATED({
                    message: 'Registered OK',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Registration failed' });
            }
        } catch (error) {
            next(error);
        }
    }

    getAllUsers = async (req, res, next) => {
        try {
            const result = await UserService.getAllUsers();
            if (result) {
                new CREATED({
                    message: 'Registered OK',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Failed' });
            }
        } catch (error) {
            next(error);
        }
    }


    addUserAddress = async (req, res, next) => {
        try {
            const result = await UserService.addUserAddress(req.body);
            if (result) {
                new CREATED({
                    message: 'Address added successfully',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Address failed' });
            }

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
}

module.exports = new UserController();