import React from 'react'
import AboutUs from '../../components/Introduce/AboutUs/AboutUs'
import Culture from '../../components/Introduce/Culture/Culture'
import Economic from '../../components/Introduce/Economic/Economic'
import { assets } from '../../assets/assets';

const Introduce = () => {
    return (
        <div>
            <img src={assets.introduce} alt="Liên hệ" />
            <AboutUs />
            <Culture />
            <Economic />
        </div>
    )
}

export default Introduce
