// ProductsList.js
import React, { useState } from 'react';
import "./ProductsList.css";
import { products } from "../../../data/products";
import { assets } from "../../../assets/assets";

const ProductsList = () => {
  
  const [currentPage, setCurrentPage] = useState(1);

  
  const productsPerPage = 9;

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  
  const totalPages = Math.ceil(products.length / productsPerPage);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const generatePageNumbers = () => {
    let pageNumbers = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, currentPage + 1);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="products-list">
      <h2 className="section-title">SẢN PHẨM NỔI BẬT</h2>
      <div className="products-content">
        {/* Banner */}
        <div className="productlist-banner">
          <img src={assets.bannerProductList} alt="Màn hình LED" />
        </div>

        {/* Product Grid */}
        <div className="productlist-grid">
          {currentProducts.map((product) => (
            <div className="productlist-card" key={product.id}>
              <div className="productlist-img-container">
                <img src={product.image} alt={product.name} className="productlist-image" />
                <div className="cart-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
              <h3 className="productlist-title">{product.name}</h3>
              <div className="productlist-actions">
                <button className="productlist-price-btn">
                  {product.price ? product.price : "LIÊN HỆ"}
                </button>
                <button className="productlist-btn">XEM NGAY</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {/* Previous Page */}
        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {generatePageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <button key={index} className="pagination-btn dots">
                ...
              </button>
            );
          }
          return (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}

        {/* Next Page */}
        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
