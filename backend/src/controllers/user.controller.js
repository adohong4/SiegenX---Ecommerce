'use strict'

const UserService = require("../services/user.service")
const { OK, CREATED, SuccessResponse } = require('../core/success.response')


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

    // changeInfo = async(req, res, next) => {
    //     try {
    //         const userID = req.params.id;
    //         console.log(userID)
    //         const updateData = {userID, ...req.body}
    //         const result = await UserService.changeInfo(updateData);
    //         if (result) {
    //             new CREATED({
    //                 message: 'Registered OK',
    //                 metadata: result.metadata
    //             }).send(res);
    //         } else {
    //             res.status(400).json({ message: 'Update failed' });
    //         }
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    getAllUsers = async(req, res, next) => {
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
}

module.exports = new UserController()