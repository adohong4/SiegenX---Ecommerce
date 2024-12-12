'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Contacts'

const ContactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    content: { type: String, required: true },
}, { minimize: false, timestamps: true })

const contactModel = mongoose.models.contact || mongoose.model(DOCUMENT_NAME, ContactSchema)

module.exports = contactModel;