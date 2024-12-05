import React from 'react';
import { assets } from '../../../assets/assets';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="image">
                <img src={assets.about5} alt="Image 5" />
            </div>
            <div className="image">
                <img src={assets.about1} alt="Image 1" />
            </div>
        </div>
    );
};

export default AboutUs;

