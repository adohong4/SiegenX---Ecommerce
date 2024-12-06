import React from 'react'
import { assets } from '../../assets/assets';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner-gt'>
            <div className='img-banner'>
                <img src={assets.contact} alt="Liên hệ" />
            </div>
        </section>  
    )
}

export default Banner
