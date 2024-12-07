import React from 'react';
import './Contact.css';
import Banner from '../../components/Banner/Banner';

const Contact = () => {
    return (
        <div className='page-contact'>
            <div className='banner-contact'>
                <Banner />
            </div>
            <div className='section-contact'>
                <div className="container contact-container">
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
            <div className='section-map'>
                <div className='container'>
                    <div className='contact-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.8491051452497!2d105.78669357486109!3d20.981011980656426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acce612c766f%3A0xf1fff967689168e!2zxJDhuqFpIEjhu41jIEtp4bq_biBUcsO6YyAtIFRy4bqnbiBQaMO6IChIw6AgxJDDtG5nKQ!5e1!3m2!1svi!2s!4v1733567121494!5m2!1svi!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                
        </div>
    );
};

export default Contact;

