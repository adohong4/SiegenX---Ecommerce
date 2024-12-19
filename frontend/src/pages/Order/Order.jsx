import React, { useState } from 'react';
import './Order.css';
import { assets } from '../../assets/assets';

const PlaceOrder = () => {
    const [paymentMethod, setPaymentMethod] = useState("cash");
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
        country: "USA",
        phone: "1234567890",
        address: "",
    });

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý logic đặt hàng tại đây
        console.log("Form Data: ", formData);
        console.log("Payment Method: ", paymentMethod);
    };

    return (
        <form className="place-order" onSubmit={handleSubmit}>
            <div className="place-order-left">
                <p className="title">Thông Tin Giao Hàng</p>
                <div className="Place-address">
                    <select
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Chọn địa chỉ giao hàng của bạn</option>
                        <option value="1">Nguyễn Việt Anh, Hà Đông, Hà Nội, Việt Nam, 90001, 1234567890</option>
                        <option value="2">Đỗ Hồng An, Mỗ Lao, Hà Đông, Hà Nội ,Việt Nam, 10001, 9876543210</option>
                    </select>
                </div>

                <div className="multi-fields">
                    <input
                        type="text"
                        placeholder="Tên"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Họ"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='multi-fields'>
                    <input
                        type="email"
                        placeholder="Địa chỉ email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Đường"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="multi-fields">
                    <input
                        type="text"
                        placeholder="Thành phố"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Bang"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="multi-fields">
                    <input
                        type="text"
                        placeholder="Mã bưu điện"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Quốc gia"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='multi-fields'>
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
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
                            <p>50000</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Tổng Cộng</b>
                            <b>5050000</b>
                        </div>
                    </div>
                    <div className="hinhthuc-thanhtoan">
                        <p>Hình thức thanh toán:</p>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                checked={paymentMethod === "cash"}
                                onChange={handlePaymentChange}
                            />
                            Thanh toán khi nhận hàng
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="online"
                                checked={paymentMethod === "online"}
                                onChange={handlePaymentChange}
                            />
                            Thanh toán trực tuyến
                        </label>

                        {paymentMethod === "online" && (
                            <div className="payment-options">
                                <p>Chọn phương thức thanh toán trực tuyến:</p>
                                <img src={assets.momo} alt="MoMo" className="payment-logo" />
                                <img src={assets.zalopay} alt="ZaloPay" className="payment-logo" />
                                <img src={assets.stripe} alt="Stripe" className="payment-logo" />
                            </div>
                        )}
                    </div>


                    <div className='btn-thanhtoan'>
                        <button type="submit" className="place-order-btn">Đặt Hàng</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
