import React from 'react';
import './Contact.css';
import Banner from '../../components/Banner/Banner';

const Contact = () => {
    return (
        <div>
            <Banner />
            <div className="contact-container">
                <div className="contact-info">
                    <h2>CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ SIEGENX</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo </p>
                    <div className="contact-detail">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Địa chỉ: Đi-38 khu đô thị Ciputra, đường Lê Văn Lương, Quận Thanh Xuân, Hà Nội</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <span>Số điện thoại: 0243 6666 000</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>Email: siegenx.company@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="title">
                        <h2>LIÊN HỆ</h2>
                        <p>SIEGENX sẽ liên hệ với bạn trong vòng 5 phút</p>
                    </div>
                    <form>
                        <div className="group">
                            <div className="form-group">
                                <label htmlFor="name">Họ tên</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Nội dung</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="btn">Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

