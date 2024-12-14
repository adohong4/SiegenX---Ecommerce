import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductTab.css';

const ProductTab = () => {
    const { productSlug } = useParams();
    const [activeTab, setActiveTab] = useState('description');
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const fetchProductData = async () => {
            const response = await axios.get(`http://localhost:4001/v1/api/products/${productSlug}`);
            setProduct(response.data.metadata.product);
            console.log(response.data.metadata.product)
        };

        fetchProductData();
    }, [productSlug]);

    if (!product) {
        return <div className="error-message">Sản phẩm không tồn tại</div>;
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="product-tab-container">
            <div className="tab-header">
                <button
                    className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => handleTabClick('description')}
                >
                    Mô tả
                </button>
                <button
                    className={`tab-button ${activeTab === 'specification' ? 'active' : ''}`}
                    onClick={() => handleTabClick('specification')}
                >
                    Thông số kỹ thuật
                </button>
            </div>

            <div className="tab-content">

                {activeTab === 'description' && (
                    <div className="description-section">
                        <h1 className="producttab-title">{product.nameProduct}</h1>
                        <div className="producttab-images">
                            {product.images.length > 0 && (
                                <img src={product.images[0].url} alt="Hình ảnh sản phẩm" className="producttab-image" />
                            )}
                        </div>

                        <h2>I. Thông tin sản phẩm</h2>
                        <p className="producttab-description">{product.description}</p>

                        <h2>II. Ưu điểm sản phẩm</h2>
                        <div className="producttab-images">
                            {product.images.length > 1 && (
                                <img src={product.images[1].url} alt="Hình ảnh sản phẩm" className="producttab-image" />
                            )}
                        </div>
                        <p className="producttab-description">{product.description}</p>
                        <div className="producttab-images">
                            {product.images.length > 2 && (
                                <img src={product.images[2].url} alt="Hình ảnh sản phẩm" className="producttab-image" />
                            )}
                        </div>

                        <h2>III. Ứng dụng</h2>
                        <p className="producttab-description">{product.description}</p>
                    </div>
                )}

                {activeTab === 'specification' && (
                    <div className="specification-section">
                        <h2 className="specification-title">Thông số kỹ thuật</h2>
                        <ul className="specification-list">
                            {product.specification.map((spec, index) => (
                                <React.Fragment key={index}>
                                    <li className="spec-item">
                                        <span className="spec-label">MainBoard:</span> <span className="spec-value">{spec.mainBoard}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Chip:</span> <span className="spec-value">{spec.chip}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">CPU:</span> <span className="spec-value">{spec.cpu}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">GPU:</span> <span className="spec-value">{spec.gpu}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">RAM:</span> <span className="spec-value">{spec.ram}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Memory:</span> <span className="spec-value">{spec.memory}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Version:</span> <span className="spec-value">{spec.version}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Ports:</span> <span className="spec-value">{spec.ports}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Display Size:</span> <span className="spec-value">{spec.displaySize}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Pixel Density:</span> <span className="spec-value">{spec.pixelDensity}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Display:</span> <span className="spec-value">{spec.display}</span>
                                    </li>
                                    <li className="spec-item">
                                        <span className="spec-label">Refresh Rate:</span> <span className="spec-value">{spec.refreshRate}</span>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProductTab;
