import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductShowcase.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

const ProductShowcase = () => {
  const { product_list, url2 } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleProductClick = (productSlug) => {
    navigate(`/san-pham/${productSlug}`);
  };

  const handleContactRedirect = () => {
    navigate("/lien-he");
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
                  src={`${url2}/images/${product.images[0]}`}
                  alt={product.title}
                  className="product-img"
                />
                <div
                  className="cart-icon"
                  onClick={(e) => {
                    e.stopPropagation(); // Ngăn chặn sự kiện nhấn sp
                    navigate("/cart"); // Chuyển hướng tới trang giỏ hàng
                  }}
                >
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
          {/* Thêm các ô trống nếu số lượng sản phẩm ít hơn 4 */}
          {Array.from({ length: 4 - product_list.length }).map((_, index) => (
            <div className="product-card-empty-card" key={`empty-${index}`}>
              {/* Chỉ để trống hoặc hiển thị placeholder */}
              <div className="product-img-container empty"></div>
              <div className="product-actions empty"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
