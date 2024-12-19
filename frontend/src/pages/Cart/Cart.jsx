import React from 'react';
import './Cart.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate();

    const cartItems = [
        {
            id: 1,
            name: "Tivi 24inch màn hình cong",
            price: 2000000,
            quantity: 2,
            image: "tivi.jpg",
        },
        {
            id: 2,
            name: "Tivi 18inch màn hình cong",
            price: 15000000,
            quantity: 1,
            image: "tivi2.jpg",
        },
    ];

    const Fee = cartItems.length === 0 ? 0 : 50000;

    const getTotalCartAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <ScrollToTop />
            <h1 className="cart-header">Giỏ Hàng Của Bạn</h1>
            <div className="cart-content">
                <div className="cart-items">
                    <div className="cart-items-title">
                        <p>Sản Phẩm</p>
                        <p>Tên</p>
                        <p>Giá</p>
                        <p>Số Lượng</p>
                        <p>Tổng</p>
                        <p></p>
                    </div>
                    <hr />
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={`/images/${item.image}`} alt={item.name} className="cart-item-image" />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <p>{(item.price * item.quantity)}</p>
                            <p className="cart-item-remove">Xóa</p>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2>Tóm Tắt Đơn Hàng</h2>
                    <div className="cart-summary-details">
                        <p>Tạm Tính:</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <div className="cart-summary-details">
                        <p>Phí Giao Hàng:</p>
                        <p>{Fee}</p>
                    </div>
                    <div className="cart-summary-total">
                        <b>Tổng Cộng:</b>
                        <b>{(getTotalCartAmount() + Fee)}</b>
                    </div>
                    <button onClick={() => navigate('/hoa-don')} className="cart-checkout-button">Tiến Hành Thanh Toán</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
