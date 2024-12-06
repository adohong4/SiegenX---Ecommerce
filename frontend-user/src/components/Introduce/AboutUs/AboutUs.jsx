import React from 'react';
import { assets } from '../../../assets/assets';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="section_1_forme">
        <div className="row row_intro">
            <div className="col-12 col-md-6 col-left-forme d-flex justify-content-center align-items-center">
                <img src={assets.forme} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 col-right-forme d-flex justify-content-center align-items-center">
                <img src={assets.about1} alt="" className="img-fluid" />
            </div>
        </div>
    </section>
    );
};

export default AboutUs;

