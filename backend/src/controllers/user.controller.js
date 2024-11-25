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
        // return res.status(201).json({
        //     message: '',
        //     metadata:
        // })
        try {
            new CREATED({
                message: 'Registered OK',
                metadata: await UserService.signUp(req.body)
            }).send(res);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController()