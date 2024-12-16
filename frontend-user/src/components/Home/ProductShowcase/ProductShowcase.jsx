import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductShowcase.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

const ProductShowcase = () => {
  const { product_list,url } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const handleProductClick = (productSlug) => {
    navigate(`/product/${productSlug}`);
  };

  const handleContactRedirect = () => {
    navigate("/contact");
  };

  return (
    <section className="product-showcase">
      <h2 className="section-title">SẢN PHẨM NỔI BẬT</h2>
      <div className="product-content">
        {/* Cột banner */}
        <div className="product-banner">
          <img
            src={assets.homeProduct}
            alt="Màn hình LED"
            className="banner-main-img"
          />
        </div>

        {/* Cột sản phẩm */}
        <div className="product-grid">
          {product_list.slice(0, 4).map((product) => (
            <div
              className="product-card"
              key={product.product_slug}
              onClick={() => handleProductClick(product.product_slug)}
            >
              {/* Container hình ảnh và icon giỏ hàng */}
              <div className="product-img-container">
                <img
                  src={product.images[0]?.url}
                  alt={product.title}
                  className="product-img"
                />
                <div className="cart-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
              {/* Thông tin sản phẩm */}
              <h3 className="product-name">{product.nameProduct}</h3>
              <div className="product-actions">
                <button
                  className="product-price-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    product.price ? null : handleContactRedirect();
                  }}
                >
                  {product.price ? `${product.price.toLocaleString()}đ` : "LIÊN HỆ"}
                </button>
                <button
                  className="product-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.product_slug);
                  }}
                >
                  XEM NGAY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
