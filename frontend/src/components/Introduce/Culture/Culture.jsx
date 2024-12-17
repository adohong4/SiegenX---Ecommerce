import React from 'react'
import { assets } from '../../../assets/assets';
import './Culture.css';

const Culture = () => {
    return (
        <section className='section-vanhoa'>
            <div className='container'>
                <div className="culture-container">
                    <div className='culture-top-title'>
                        <h2 className="culture-title">VĂN HÓA DOANH NGHIỆP</h2>
                        <p className="culture-title-p">SIEGenX., JSC tự hào là một trong doanh nghiệp hàng đầu cung cấp giải pháp tương tác thông tin tại Việt Nam.</p>
                    </div>
                    <div className='culture-body-row'>
                        <div className='main-body-vanhoa'>
                            <div className="culture-items">
                                <div className="culture-item">
                                    <img src={assets.icon1} alt="Tầm nhìn" />
                                    <h3>Tầm nhìn</h3>
                                    <p>Trở thành nhà cung cấp giải pháp toàn diện trong lĩnh vực chuyển đổi số, ứng dụng công nghệ...</p>
                                </div>
                                <div className="culture-item">
                                    <img src={assets.icon2} alt="Sứ mệnh" />
                                    <h3>Sứ mệnh</h3>
                                    <p>SIEGenX luôn mang đến sản phẩm chất lượng cao với giá thành hợp lý nhất bằng lòng nhiệt huyết...</p>
                                </div>
                                <div className="culture-item">
                                    <img src={assets.icon3} alt="Giá trị cốt lõi" />
                                    <h3>Giá trị cốt lõi</h3>
                                    <p>Tiêu Chí dưới đây sẽ là những giá trị mà tập thể lãnh đạo và nhân viên SIEGenX luôn luôn nắm ...</p>
                                </div>
                                <div className="culture-item">
                                    <img src={assets.icon4} alt="Môi trường làm việc" />
                                    <h3>Môi trường làm việc</h3>
                                    <p>Chuyên nghiệp - Năng động - Sáng tạo - Đam mê - Thử thách - Trách nhiệm là những...</p>
                                </div>
                                <div className="culture-item">
                                    <img src={assets.icon5} alt="Thiết lập kinh doanh" />
                                    <h3>Thiết lập kinh doanh</h3>
                                    <p>SIEGenX mong muốn trở thành sản phẩm được yêu thích và trân trọng từ khách hàng...</p>
                                </div>
                                <div className="culture-item">
                                    <img src={assets.icon6} alt="Tiềm năng sáng tạo" />
                                    <h3>Tiềm năng sáng tạo</h3>
                                    <p>SIEGenX mong muốn trở thành sản phẩm được yêu thích và trân trọng từ khách hàng...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Culture
