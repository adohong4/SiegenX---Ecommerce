import React, { useState } from 'react';
import './Contact.css';
import Banner from '../../components/Banner/Banner';

const Contact = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của biểu mẫu

        const contactData = {
            username: username, // Giả sử bạn đã khai báo biến này
            email: email,       // Giả sử bạn đã khai báo biến này
            phone: phone,       // Giả sử bạn đã khai báo biến này
            content: content,   // Giả sử bạn đã khai báo biến này
        };

        try {
            const response = await fetch('http://localhost:4001/v1/api/contact/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Liên hệ đã được thêm:', result);
            // Có thể cập nhật trạng thái UI hoặc thông báo thành công ở đây

        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
            // Có thể hiển thị thông báo lỗi cho người dùng ở đây
        }
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className="group">
                                <div className="form-group">
                                    <label htmlFor="username">Họ tên</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Nội dung</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn">Gửi</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='section-map'>
                <div className='container'>
                    <div className='contact-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.8491051452497!2d105.78669357486109!3d20.981011980656426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acce612c766f%3A0xf1fff967689168e!2zxJDhuqFpIEjhu41jIEtp4bq_biBUcsO6YyAtIFRy4bqnbiBQaMO6IChIw6AgxJDDtG5nKQ!5e1!3m2!1svi!2s!4v1733567121494!5m2!1svi!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
