'use strict'

const AdminService = require('../services/admin.user.service')
const { OK, CREATED, NOCONTENT } = require('../core/success.response')

class AdminController {

    changeInfo = async (req, res, next) => {
        try {
            const userID = req.params.id;
            // console.log(userID)
            const updateData = { userID, ...req.body }
            const result = await AdminService.changeInfo(updateData);
            if (result) {
                new CREATED({
                    message: 'Update user Success',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Update failed' });
            }
        } catch (error) {
            next(error);
        }
    }

    getAllUser = async (req, res, next) => {
        try {
            const result = await AdminService.getAllUser();
            if (result) {
                new OK({
                    message: 'Get Info User Successful',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Failed' });
            }
        } catch (error) {
            next(error);
        }
    }

    deleteUser = async (req, res, next) => {
        try {
            const userID = req.params.id;
            // console.log(userID)
            const updateData = { userID }
            const result = await AdminService.deleteUser(updateData);
            if (result) {
                new NOCONTENT({
                    message: 'Delete Success',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Delete failed' });
            }
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new AdminController()
