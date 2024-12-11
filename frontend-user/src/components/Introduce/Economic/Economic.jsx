import React, { useState } from 'react';
import { assets } from '../../../assets/assets';
import './Economic.css';

const Economic = () => {
    // Khai báo state để theo dõi tab đang được chọn
    const [activeTab, setActiveTab] = useState('tech'); // Mặc định tab 'tech' được chọn

    // Dữ liệu cho các tab và hình ảnh tương ứng
    const tabImages = {
        tech: assets.techImage,
        meeting: assets.meetingImage,
        advertising: assets.advertisingImage,
        ktv: assets.ktvImage,
        architecture: assets.architectureImage
    };

    // Hàm xử lý sự kiện khi nhấn vào tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className='section-linhvuc'>
            <div className="economic-activity container">
                <h2 className="culture-title text-center mb-4">LĨNH VỰC KINH DOANH</h2>

                <div className="row">
                    {/* Tabs (Vertical Buttons) */}
                    <div className="col-md-4 col-xxl-4 col-tab-left-linhvuc">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button
                                className={`nav-link ${activeTab === 'tech' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tech')}
                                type="button"
                                role="tab"
                                aria-controls="v-pills-tech"
                                aria-selected={activeTab === 'tech'}
                            >
                                Giải pháp công nghệ toàn diện
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'meeting' ? 'active' : ''}`}
                                onClick={() => handleTabClick('meeting')}
                                type="button"
                                role="tab"
                                aria-controls="v-pills-meeting"
                                aria-selected={activeTab === 'meeting'}
                            >
                                Giải pháp phòng họp thông minh
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'advertising' ? 'active' : ''}`}
                                onClick={() => handleTabClick('advertising')}
                                type="button"
                                role="tab"
                                aria-controls="v-pills-advertising"
                                aria-selected={activeTab === 'advertising'}
                            >
                                Giải pháp quảng cáo 3D ngoài trời
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'ktv' ? 'active' : ''}`}
                                onClick={() => handleTabClick('ktv')}
                                type="button"
                                role="tab"
                                aria-controls="v-pills-ktv"
                                aria-selected={activeTab === 'ktv'}
                            >
                                KTV 5D
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'architecture' ? 'active' : ''}`}
                                onClick={() => handleTabClick('architecture')}
                                type="button"
                                role="tab"
                                aria-controls="v-pills-architecture"
                                aria-selected={activeTab === 'architecture'}
                            >
                                Kiến trúc điêu khắc đương đại
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="col-md-8 col-xxl-8 col-tab-right-linhvuc">
                        <div className="tab-content" id="v-pills-tabContent">
                            {/* Chỉ hiển thị ảnh khi tab được chọn */}
                            <div
                                className={`tab-pane fade ${activeTab === 'tech' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="v-pills-tech-tab"
                            >
                                {activeTab === 'tech' && <img src={assets.economic} alt="Công nghệ" className="img-fluid rounded" />}
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'meeting' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="v-pills-meeting-tab"
                            >
                                {activeTab === 'meeting' && <img src={assets.economic} alt="Phòng họp thông minh" className="img-fluid rounded" />}
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'advertising' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="v-pills-advertising-tab"
                            >
                                {activeTab === 'advertising' && <img src={assets.economic} alt="Quảng cáo 3D" className="img-fluid rounded" />}
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'ktv' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="v-pills-ktv-tab"
                            >
                                {activeTab === 'ktv' && <img src={assets.economic} alt="KTV 5D" className="img-fluid rounded" />}
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'architecture' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="v-pills-architecture-tab"
                            >
                                {activeTab === 'architecture' && <img src={assets.economic} alt="Kiến trúc" className="img-fluid rounded" />}
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Economic;
