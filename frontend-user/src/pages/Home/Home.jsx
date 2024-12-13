import React from "react";
import { assets } from "../../assets/assets";
import BannerHome from "../../components/Home/BannerHome/BannerHome";
import ProductShowcase from "../../components/Home/ProductShowcase/ProductShowcase";
import Solutions from "../../components/Home/Solution/Solution";
import Partners from "../../components/Home/Partners/Partners";
import Provide from "../../components/Home/Provide/Provide";
import './Home.css';
import Notification from "../../components/Notification/Notification";
const Home = () => {
  return (
    <main>
      <div className='container-home'>
        <Notification />
        <BannerHome />
        <div className="container">
          <ProductShowcase />
        </div>
        <Solutions />
        <div className='banner-img-f'>
          <img src={assets.bannerEnd} alt="Liên hệ" />
        </div>
        <Provide />
        <Partners />
      </div>
    </main>
  );
};

export default Home;

