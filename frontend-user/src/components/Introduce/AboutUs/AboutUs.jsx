import React from 'react';
import { assets } from '../../../assets/assets';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="image-overlay">
                <img src={assets.about2} alt="Image 1" />
                <img src={assets.about3} alt="Image 2" />
                <img src={assets.about4} alt="Image 3" />
            </div>
            <img src={assets.about1} alt="Image 4" className="right-image" />
        </div>
    );
};

export default AboutUs;

