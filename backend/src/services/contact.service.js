'use strict'

const contactModel = require('../models/contact.model')
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenError } = require("../core/error.response")

class ContactService {
    static addContact = async ({ username, email, phone, content }) => {
        try {

            const newContact = new contactModel({
                username,
                email,
                phone,
                content
            });
            const savedContact = await newContact.save();

            return {
                metadata: {
                    savedContact
                }
            }
        } catch (error) {
            throw new BadRequestError('Error');
        }
    }

    static getContact = async () => {
        try {
            const contacts = await contactModel.find({});
            return {
                metadata: {
                    contacts
                }
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactService;