import React from "react";
import { assets } from "../../assets/assets";
import BannerHome from "../../components/Home/BannerHome/BannerHome";
import ProductShowcase from "../../components/Home/ProductShowcase/ProductShowcase";
import Solutions from "../../components/Home/Solution/Solution";
import Partners from "../../components/Home/Partners/Partners";
import Provide from "../../components/Home/Provide/Provide";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import './Home.css';
import Notification from "../../components/Notification/Notification";
const Home = () => {
  return (
    <main>
      <div className='container-home'>
        <ScrollToTop/>
        <Notification />
        <BannerHome />
        <div className="container">
          <ProductShowcase />
        </div>
        <Solutions />
        <div className='banner-img-end'>
          <img src={assets.bannerEnd}  />
        </div>
        <Provide />
        <Partners />
      </div>
    </main>
  );
};

export default Home;

