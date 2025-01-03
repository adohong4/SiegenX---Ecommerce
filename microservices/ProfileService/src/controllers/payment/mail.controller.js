'use strict';

const MailService = require('../../services/mail.service');
const { OK, CREATED, SuccessResponse } = require('../../core/success.response')

class MailController {
    sendOrderConfirmation = async (req, res, next) => {
        try {
            const { email, orderDetails } = req.body;

            if (!email || !orderDetails) {
                throw new BadRequestError('Thiếu email hoặc thông tin đơn hàng');
            }

            const result = await MailService.sendOrderConfirmation({
                email,
                orderDetails,
            });

            new OK({
                message: 'Xác nhận đơn hàng đã được gửi qua email',
                metadata: result,
            }).send(res);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new MailController();
