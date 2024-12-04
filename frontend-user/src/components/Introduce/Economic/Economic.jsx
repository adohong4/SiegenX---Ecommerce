import React from 'react';
import { assets } from '../../../assets/assets';
import './Economic.css';

const Economic = () => {
    return (
        <div className="economic-activity">
            <h2 className="culture-title">LĨNH VỰC KINH DOANH</h2>
            <div className="item-image">
                <div className="activity-items">
                    <div className="item">
                        <p>Giải pháp công nghệ toàn diện</p>
                    </div>
                    <div className="item">
                        <p>Giải pháp phòng họp thông minh</p>
                    </div>
                    <div className="item">
                        <p>Giải pháp quảng cáo 3D ngoài trời</p>
                    </div>
                    <div className="item">
                        <p>KTV 5D</p>
                    </div>
                    <div className="item">
                        <p>Kiến trúc điêu khắc đương đại</p>
                    </div>
                </div>
                <div className="image">
                    <img src={assets.economic} alt="" />
                </div>
            </div>

            <button className="activity-btn">Xem chi tiết</button>
        </div>
    );
};

export default Economic;
