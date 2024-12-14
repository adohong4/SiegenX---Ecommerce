import React from "react";
import "./BannerHome.css";
import { assets } from "../../../assets/assets";

const BannerHome = () => {
  return (
    <section className="banner">
      {/* Banner chính */}
      <div className="banner-main">
        <img src={assets.homebanner} className="banner-main-img" alt="Home Banner" />
        <div className="home-btn-container">
          <button className="home-banner-btn">XEM TẠI ĐÂY</button>
        </div>
      </div>

      {/* Danh mục sản phẩm */}
      <div className="banner-categories">
        <div className="category">
          <img src={assets.category1} alt="Màn hình LED" />
          <div className="category-overlay"></div>
          <span className="category-text">Màn hình LED</span>
        </div>
        <div className="category">
          <img src={assets.category2} alt="Màn hình tương tác" />
          <div className="category-overlay"></div>
          <span className="category-text">Màn hình tương tác</span>
        </div>
        <div className="category">
          <img src={assets.category3} alt="Màn hình quảng cáo LCD" />
          <div className="category-overlay"></div>
          <span className="category-text">Màn hình quảng cáo LCD</span>
        </div>
        <div className="category">
          <img src={assets.category4} alt="Quảng cáo 3D" />
          <div className="category-overlay"></div>
          <span className="category-text">Quảng cáo 3D</span>
        </div>
        <div className="category">
          <img src={assets.category5} alt="KTV 5D" />
          <div className="category-overlay"></div>
          <span className="category-text">KTV 5D</span>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
