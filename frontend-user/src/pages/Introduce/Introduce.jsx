import React from 'react'
import AboutUs from '../../components/Introduce/AboutUs/AboutUs'
import Culture from '../../components/Introduce/Culture/Culture'
import Economic from '../../components/Introduce/Economic/Economic'
import { assets } from '../../assets/assets';

const Introduce = () => {
    return (
        <main>
            <div className='banner-top-img'>
                <img src={assets.introduce} alt="Liên hệ" />
            </div>
            <div className='container'>
                <AboutUs />
                <Culture />
                <Economic />
            </div>
        </main> 
    )
}

export default Introduce
