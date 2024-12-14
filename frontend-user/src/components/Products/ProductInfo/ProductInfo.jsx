import React, { useState, useEffect , useContext} from "react";
import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import axios from "axios";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "../../../context/StoreContext";

const ProductInfo = () => {
  // const {product_slug,url} = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const [product_slug, setProduct] = useState(null); // Sản phẩm từ API
  const [mainImage, setMainImage] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { productSlug } = useParams(); 

  
  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:4001/v1/api/products/${productSlug}`); // URL API
      setProduct(response.data.metadata.product);
      console.log(response.data.metadata.product)
      setMainImage(response.data.metadata.product.images[0]?.url);
    } catch (error) {
      setError(error.response?.data?.message || "Không thể tải sản phẩm. Vui lòng thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  // Gọi API khi component được render lần đầu
  useEffect(() => {
    fetchProduct();
  }, [productSlug]);

  console.log(product_slug)
  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

  const handleQuantityChange = (event) => {
    let newQuantity = parseInt(event.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    } else if (newQuantity > product_slug.quantity) {
      newQuantity = product_slug.quantity;
    }
    setQuantity(newQuantity);
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setSelectedThumbnail(image);
  };

  const togglePopup = () => setShowPopup(!showPopup);

  
  if (!product_slug) return <div>Sản phẩm không tồn tại</div>;

  return (
    <div className="productinfo-container">
      <div className="productinfo-images">
        <div className="productinfo-main-image">
          <img src={mainImage} alt={product_slug.nameProduct} />
          <div className="productinfo-zoom-icon" onClick={togglePopup}>
            <FaSearch size={22} color="black" />
          </div>
        </div>
        <div className="productinfo-thumbnail-images">
          {product_slug.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className={`productinfo-thumbnail ${selectedThumbnail === image?.url ? "selected" : ""}`}
              onClick={() => handleThumbnailClick(image.url)}
            />
          ))}
        </div>
      </div>

      <div className="productinfo-details">
        <h1 className="productinfo-name">{product_slug.nameProduct}</h1>
        <p className="productinfo-price">
          {product_slug.price ? `${product_slug.price.toLocaleString()}đ` : "LIÊN HỆ VỚI SHOP"}
        </p>

        <div className="productinfo-description">
          <h3>Tại sao bạn nên chọn: <br />{`"${product_slug.nameProduct}"`} của SIEGENX</h3>
          <ul>
            {product_slug.description ? (
              <li>{product_slug.description}</li> // Render description as a single list item
            ) : (
              <li>No description available</li> // Fallback content if there's no description
            )}

          </ul>
        </div>

        <div className="productinfo-quantity">
          <label htmlFor="quantity">Số lượng:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max={product_slug.quantity}
            step="1"
          />
        </div>

        <div className="productinfo-actions">
          <button className="productinfo-buy-now">
            <FaShoppingCart className="productinfo-icon" /> MUA NGAY
          </button>
          <button className="productinfo-contact" onClick={handleContactRedirect}>
            LIÊN HỆ
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={mainImage} alt={product_slug.nameProduct} className="popup-image" />
            <button className="popup-close" onClick={togglePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
