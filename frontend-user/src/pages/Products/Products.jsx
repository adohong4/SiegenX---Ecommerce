import React from "react";
import { assets } from "../../assets/assets";
import Notification from "../../components/Notification/Notification";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import './Products.css';
const Products = () => {
    return (
        <main>
            <div className='container-home'>
                {/* <ScrollToTop /> */}
                <Notification />
                <div className='banner-main'>
                    <img src={assets.bannerProduct} alt="" />
                </div>
                <ProductsList />
            </div>
        </main>
    );
};

export default Products;
