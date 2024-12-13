import React from 'react';
import './Order.css';

const PlaceOrder = () => {
    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Thông Tin Giao Hàng</p>
                <div className="Place-address">
                    <select>
                        <option value="" disabled selected>Chọn địa chỉ giao hàng của bạn</option>
                        <option value="1">Nguyễn Việt Anh, Hà Đông, Hà Nội, Việt Nam, 90001, 1234567890</option>
                        <option value="2">Đỗ Hồng An, Mỗ Lao, Hà Đông, Hà Nội ,Việt Nam, 10001, 9876543210</option>
                    </select>
                </div>

                <div className="multi-fields">
                    <input type="text" placeholder="Tên" value="John" />
                    <input type="text" placeholder="Họ" value="Doe" />
                </div>
                <div className='multi-fields'>
                    <input type="email" placeholder="Địa chỉ email" value="john.doe@example.com" />
                    <input type="text" placeholder="Đường" value="123 Main St" />
                </div>

                <div className="multi-fields">
                    <input type="text" placeholder="Thành phố" value="Los Angeles" />
                    <input type="text" placeholder="Bang" value="California" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Mã bưu điện" value="90001" />
                    <input type="text" placeholder="Quốc gia" value="USA" />
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder="Số điện thoại" value="1234567890" />
                </div>
                
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Tổng Giỏ Hàng</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Tạm Tính</p>
                            <p>5000000</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Phí Giao Hàng</p>
                            <p>200000</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Tổng Cộng</b>
                            <b>5200000</b>
                        </div>
                    </div>
                    <button type="submit" className="place-order-btn">Đặt Hàng</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
