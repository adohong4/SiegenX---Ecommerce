import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsList.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

const ProductsList = () => {
  const { product_list,url } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const productsPerPage = 9;
  const totalPages = Math.ceil(product_list.length / productsPerPage);
  const currentProducts = product_list.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleProductClick = (productSlug) => {
    navigate(`/product/${productSlug}`);
  };

  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  console.log(product_list)

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, currentPage + 1);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) pages.push(i);

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="products-list">
      <h2 className="section-title">SẢN PHẨM NỔI BẬT</h2>
      <div className="products-content">
        <div className="productlist-banner">
          <img src={assets.bannerProductList} alt="Màn hình LED" />
        </div>

        {product_list.length === 0 ? (
          <p>Không có sản phẩm nào để hiển thị!</p>
        ) : (
          <div className="productlist-grid">
            {currentProducts.map((product) => (
              <div
                className="productlist-card"
                key={product.product_slug}
                onClick={() => handleProductClick(product.product_slug)}
              >
                <div className="productlist-img-container">
                  <img
                    src={product.images[0]?.url}
                    alt={product.nameProduct}
                    className="productlist-image"
                  />
                  <div className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </div>
                <h3 className="productlist-title">{product.nameProduct}</h3>
                <div className="productlist-actions">
                  <button
                    className="productlist-price-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      product.price ? null : handleContactRedirect();
                    }}
                  >
                    {product.price ? `${product.price.toLocaleString()}đ` : "LIÊN HỆ"}
                  </button>
                  <button
                    className="productlist-btn"
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
        )}
      </div>

      {product_list.length > 0 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {generatePageNumbers().map((page, index) => (
            <button
              key={index}
              className={`pagination-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}

          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
