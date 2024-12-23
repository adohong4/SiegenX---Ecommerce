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

}

module.exports = new ContactController();