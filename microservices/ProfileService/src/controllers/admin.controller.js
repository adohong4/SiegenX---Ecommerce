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
            const { email, page = 1, limit = 10 } = req.query; // Lấy thêm tham số phân trang từ query
            const skip = (page - 1) * limit; // Tính skip

            const totalUsers = await AdminService.countDocumentsByEmail(email); // Đếm tổng sản phẩm khớp
            const users = await AdminService.getUsersByEmail(email, skip, limit); // Lấy sản phẩm theo trang

            res.status(200).json({
                status: true,
                message: 'Tìm kiếm người dùng thành công!',
                data: users,
                pagination: {
                    total: totalUsers,
                    currentPage: parseInt(page),
                    totalPages: Math.ceil(totalUsers / limit),
                    limit: parseInt(limit),
                },
            });
        } catch (error) {
            next(error);
        }
    };

    countUser = async (req, res, next) => {
        try {
            const result = await AdminService.countUser();
            if (result) {
                new OK({
                    message: 'Count User Successful',
                    metadata: result
                }).send(res);
            } else {
                res.status(400).json({ message: 'Failed' });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AdminController()
