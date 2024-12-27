'use strict'

const AdminService = require('../services/admin.user.service')
const { OK, CREATED, NOCONTENT } = require('../core/success.response')

class AdminController {

    changeInfo = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { username, password } = req.body;
            const result = await AdminService.changeInfo({ userId: id, username, password });
            new CREATED({
                message: 'Cập nhật thành công',
                metadata: result.metadata
            }).send(res);

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
                new OK({
                    message: 'Xóa thành công',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Delete failed' });
            }
        } catch (error) {
            next(error);
        }
    }

    getUsersByEmail = async (req, res, next) => {
        try {
            const { email } = req.query; // Lấy title từ query params
            const result = await AdminService.getUsersByEmail(email);

            new OK({
                message: 'Tìm kiếm thành công',
                metadata: result.users
            }).send(res);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new AdminController()
