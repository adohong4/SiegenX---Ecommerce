import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="cointainer">
                <div className="row-top-footer">
                    <div className='title'>
                        <h3>LUÔN KẾT NỐI VỚI SIEGENX</h3>
                        <p>Hãy là người đầu tiên biết về các bộ sưu tập mới và ưu đãi độc quyền</p>
                    </div>

                    <div className="footer-contact">
                        <div className="contact-form">
                            <input type="text" placeholder="Nhập số điện thoại của bạn" />
                            <button>Gửi</button>
                        </div>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="footer-info">
                        <h3>CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ SIEGENX</h3>
                        <p>Địa chỉ: D11-39 Khu đô thị Glaximeco, đường Lê Trọng Tấn, Q. Hà Đông, Tp. Hà Nội</p>
                    </div>

                    <div className="footer-services">
                        <h4>DỊCH VỤ</h4>
                        <ul>
                            <li>Sản phẩm</li>
                            <li>Dự án</li>
                            <li>Chính sách</li>
                            <li>Tài khoản</li>
                            <li>Tuyển dụng</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>

                    <div className="footer-support">
                        <h4>HỖ TRỢ</h4>
                        <ul>
                            <li>Sản phẩm</li>
                            <li>Dự án</li>
                            <li>Chính sách</li>
                            <li>Tài khoản</li>
                            <li>Tuyển dụng</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>LIÊN KẾT</h4>
                        <ul>
                            <li><a href="https://facebook.com/Siegenx">Facebook</a></li>
                            <li><a href="https://tiktok.com/Siegenx">Tiktok</a></li>
                            <li><a href="https://zalo.com/Siegenx">Zalo</a></li>
                        </ul>
                    </div>
                </div>

                <div className='bottom-info'>
                    <p>Copyright 2024@ NHOM1 - SIEGENX</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
