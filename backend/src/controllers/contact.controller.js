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
                    metadata: result.metadata
                }).send(res);
            } else {
                res.status(400).json({ message: 'Contact failed' });
            }
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ContactController();