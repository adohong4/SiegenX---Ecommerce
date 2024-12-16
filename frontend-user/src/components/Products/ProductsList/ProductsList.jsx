import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./ProductsList.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

const ProductsList = () => {
  const { product_list } = useContext(StoreContext);
  const [searchParams] = useSearchParams(); // Lấy các tham số từ URL
  const [selectedCategory, setSelectedCategory] = useState(null); // Category được chọn
  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 9; // Số sản phẩm mỗi trang
  const navigate = useNavigate();

  // Lấy category từ URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl); // Cập nhật selectedCategory khi category thay đổi trong URL
    } else {
      setSelectedCategory(null); 
    }
  }, [searchParams]);

  // Lọc sản phẩm theo category
  const filteredProducts = selectedCategory
    ? product_list.filter((product) => product.category === selectedCategory)
    : product_list;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage); 
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const emptyProducts = new Array(productsPerPage - currentProducts.length).fill(null); // Placeholder nếu ít sản phẩm hơn

  // Xử lý khi click vào sản phẩm
  const handleProductClick = (productSlug) => {
    navigate(`/product/${productSlug}`);
  };

  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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

  const columns = [
    { title: "Màn hình LED", category: "Laptops" },
    { title: "MH tương tác", category: "LaptopTYFCs" },
    { title: "Màn hình quảng cáo LCD", category: "Màn hình quảng cáo LCD" },
    { title: "Quảng cáo 3D (OOH)", category: "Quảng cáo 3D (OOH)" },
    { title: "KTV 5D", category: "KTV 5D" },
  ];

  // Xử lý khi click vào category từ BannerHome
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    navigate(`/product?category=${category}`); // Chuyển đến URL với category
  };

  return (
    <div className="products-list">
      {/* List Category */}
      <div className="menu-container">
        <div className="menu-columns">
          {columns.map((column, index) => (
            <div
              key={index}
              className="menu-column"
              onClick={() => handleCategoryClick(column.category)} // Chuyển category khi click
            >
              <div className="menu-title">{column.title}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="section-title">
        {selectedCategory ? `Danh mục: ${selectedCategory}` : "Tất cả sản phẩm"}
      </h2>

      <div className="products-content">
        <div className="productlist-banner">
          <img src={assets.bannerProductList} alt="Màn hình LED" />
        </div>

        {filteredProducts.length === 0 ? (
          <p>Không có sản phẩm nào trong danh mục này!</p>
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
                      product.price ? null : navigate("/contact");
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

            {/* Add empty placeholders to fill the grid */}
            {emptyProducts.map((_, index) => (
              <div className="productlist-card empty" key={index}></div>
            ))}
          </div>
        )}
      </div>

      {filteredProducts.length > 0 && (
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
