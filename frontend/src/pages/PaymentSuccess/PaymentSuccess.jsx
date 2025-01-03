import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./PaymentSuccess.css"


const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { message, orderData } = location.state || {}; // Nhận thông tin từ `navigate`


    return (
        <div className="payment-success">
            <h1>{message || "Đặt hàng thành công!"}</h1>
            <p>Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!</p>

            <div className="order-info">
                <h2>Đặt hàng thành công</h2>
                <h2>Hãy kiểm tra email để xem thông tin xác nhận</h2>
            </div>

            <button onClick={() => navigate('/myorder')} className="btn-back-to-order">
                Xem tình trạng đơn hàng
            </button>
            <button onClick={() => navigate('/')} className="btn-back-home">
                Quay lại trang chủ
            </button>
        </div>
    );
};

export default PaymentSuccess;
