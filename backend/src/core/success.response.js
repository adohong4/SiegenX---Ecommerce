'use strict'

const StatusCode = {
    OK: 200,
    CREATED: 201
}

const ReasonStatusCode = {
    CREATED: 'Created',
    OK: 'Success'
}

class SuccessResponse {
    constructor({ message, metadata }) {
        this.status = 200;
        this.message = message;
        this.metadata = metadata;
    }
    send(res) {
        res.status(this.status).json(this);
    }
}

class OK extends SuccessResponse {
    constructor({ message, metadata }) {
        super({ message, metadata });
        this.status = 200;
    }
}

class CREATED extends SuccessResponse {
    constructor({ message, metadata }) {
        super({ message, metadata });
        this.status = 201;
    }
}

module.exports = {
    OK, CREATED, SuccessResponse
}