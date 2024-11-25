'use strict'

const UserService = require("../services/user.service")
const { OK, CREATED, SuccessResponse } = require('../core/success.response')


class UserController {
    signUp = async (req, res, next) => {
        // return res.status(201).json({
        //     message: '',
        //     metadata:
        // })
        new CREATED({
            message: 'Registered OK',
            metadata: await UserService.signUp(req.body)
        }).send(res)
    }
}

module.exports = new UserController()