import React from 'react';
import { assets } from '../../../assets/assets';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="section_1_forme">
            <div className='container'>
                <div className="row row_intro">
                    <div className="row_intro_feft">
                        <img src={assets.forme} alt="" />
                    </div>
                    <div className="row_intro_right">
                        <img src={assets.about1} alt="" />

                    </div>
                </div>
            </div>
            
    </section>
    );
};

export default AboutUs;

