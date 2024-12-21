import React, { useContext } from 'react';
import './Cart.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Cart = () => {

    const { cartItems, product_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

    const navigate = useNavigate();

    const Fee = 50000;

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
                    <br />
                    <hr />
                    {product_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id} className="cart-item">
                                    <img src={`${url}/images/${item.images[0]}`} className="cart-item-image" />
                                    <p>{item.nameProduct}</p>
                                    <p>{(item.price).toLocaleString()} đ</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{(item.price * cartItems[item._id]).toLocaleString()} đ</p>
                                    <p onClick={() => removeFromCart(item._id)} className="cart-item-remove">X</p>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="cart-summary">
                    <h2>CHI TIẾT ĐƠN HÀNG</h2>
                    <div>
                        <div className="cart-summary-details">
                            <p>Tạm Tính:</p>
                            <p>{(getTotalCartAmount()).toLocaleString()} đ</p>
                        </div>
                        <div className="cart-summary-details">
                            <p>Phí Giao Hàng:</p>
                            <p>{(getTotalCartAmount() === 0 ? 0 : Fee).toLocaleString()} đ</p>
                        </div>
                        <div className="cart-summary-total">
                            <b>Tổng Cộng:</b>
                            <b>{(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + Fee).toLocaleString()} đ</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/hoa-don')} className="cart-checkout-button">Tiến Hành Thanh Toán</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
