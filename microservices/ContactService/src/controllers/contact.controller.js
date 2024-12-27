'use strict'

const ContactService = require("../services/contact.service")
const { OK, CREATED, SuccessResponse } = require('../core/success.response')


class ContactController {
    addContact = async (req, res, next) => {
        try {
            const result = await ContactService.addContact(req.body);
            if (result) {
                new CREATED({
                    message: 'Contact OK',
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Contact failed' });
            }
        } catch (error) {
            next(error);
        }
    }

    getContact = async (req, res, next) => {
        try {
            const result = await ContactService.getContact(req.body);
            if (result) {
                new OK({
                    message: 'Contact OK',
                    metadata: result
                }).send(res);
            } else {
                res.status(400).json({ message: 'Contact failed' });
            }
        } catch (error) {
            next(error);
        }
    }


    deleteContact = async (req, res, next) => {
        try {
            const result = await ContactService.deleteContact(req.params.id);
            new OK({
                message: 'Xóa thành công',
                metadata: result
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    updateContactIsCheck = async (req, res, next) => {
        try {
            const { id } = req.params; // ID của liên hệ từ URL
            const { isCheck } = req.body; // Giá trị mới cho isCheck từ body

            const updatedContact = await ContactService.updateIsCheck(id, isCheck);

            res.status(200).json({
                message: "Cập nhật trạng thái isCheck thành công",
                metadata: updatedContact
            });
        } catch (error) {
            next(error);
        }
    }

    getContactWithPagination = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const skip = (page - 1) * limit;

            const totalContacts = await ContactService.countDocuments();
            const contacts = await ContactService.find(skip, limit);

            res.status(200).json({
                message: 'Contacts fetched successfully',
                data: contacts,
                pagination: {
                    total: totalContacts,
                    currentPage: page,
                    totalPages: Math.ceil(totalContacts / limit),
                    limit,
                },
            });
        } catch (error) {
            next(error);
        }
    };

    getContactsByEmail = async (req, res, next) => {
        try {
            const { email } = req.query; // Lấy title từ query params
            const result = await ContactService.findByEmail(email);
    
            new OK({
                message: 'Get contacts By email OK',
                metadata: result.contacts
            }).send(res);
        } catch (error) {
            next(error);
        }
    };
};


module.exports = new ContactController();