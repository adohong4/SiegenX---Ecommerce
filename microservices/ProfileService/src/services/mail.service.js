'use strict';

const nodemailer = require('nodemailer');
const { BadRequestError } = require('../core/error.response');
require('dotenv').config();

class MailService {
    static sendOrderConfirmation = async ({ email, subject, orderDetails }) => {
        try {
            const shippingFee = 50000; // Phí giao hàng cố định
    
            const totalAmount = orderDetails.reduce(
                (total, item) => total + item.quantity * item.price,
                0
            ) + shippingFee;
    
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Hoặc dùng dịch vụ email khác như Outlook, SMTP server riêng
                auth: {
                    user: process.env.EMAIL_USER, // Email của bạn
                    pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng
                },
            });
    
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: subject || 'Xác nhận đơn hàng',
                html: `
                    <h1>Đơn hàng của bạn đã được xác nhận!</h1>
                    <p>Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi.</p>
                    <p><b>Chi tiết đơn hàng:</b></p>
                    <ul>
                        ${orderDetails
                            .map(
                                (item) =>
                                    `<li>${item.title} - ${item.quantity} x ${item.price.toLocaleString()} đ</li>`
                            )
                            .join('')}
                    </ul>
                    <p><b>Phí giao hàng:</b> ${shippingFee.toLocaleString()} đ</p>
                    <p><b>Tổng cộng:</b> ${totalAmount.toLocaleString()} đ</p>
                    <p>Chúng tôi sẽ giao hàng tới địa chỉ bạn đã chọn trong thời gian sớm nhất.</p>
                `,
            };
    
            const info = await transporter.sendMail(mailOptions);
    
            if (!info.accepted.length) {
                throw new BadRequestError('Gửi email thất bại');
            }
    
            return { message: 'Email đã được gửi thành công!' };
        } catch (error) {
            throw error;
        }
    };
    
}

module.exports = MailService;
