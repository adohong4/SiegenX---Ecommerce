import React from "react";
import "./ProductShowcase.css";
import { products } from "../../../data/products";
import { assets } from "../../../assets/assets";

const ProductShowcase = () => {
  const handleContactRedirect = () => {
    window.location.href = "/contact"; // Chuyển hướng đến trang liên hệ
  };

  return (
    <section className="product-showcase">
      <h2 className="section-title">SẢN PHẨM NỔI BẬT</h2>
      <div className="product-content">
        {/* Cột banner */}
        <div className="product-banner">
          <img src={assets.homeProduct} alt="Màn hình LED" className="banner-main-img" />
        </div>

        {/* Cột sản phẩm */}
        <div className="product-grid">
        {products.slice(0, 4).map((product) => (
            <div className="product-card" key={product.id}>
              {/* Container hình ảnh và icon giỏ hàng */}
              <div className="product-img-container">
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="cart-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
              {/* Thông tin sản phẩm */}
              <h3 className="product-name">{product.name}</h3>
              <div className="product-actions">
                <button 
                  className="product-price-btn" 
                  onClick={product.price ? null : handleContactRedirect} // Điều hướng khi không có giá
                >
                  {product.price ? product.price : "LIÊN HỆ"}
                </button>
                <button className="product-btn">XEM NGAY</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
