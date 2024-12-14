import React from "react";
import { assets } from "../../assets/assets";
import Notification from "../../components/Notification/Notification";
import MenuProduct from "../../components/MenuProduct/Menu"
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import './Products.css';
const Products = () => {
    return (
        <main>
            <div className='container-home'>
                <Notification/>
                <div className='banner-main'>
                    <img src={assets.bannerProduct} alt="" />
                </div>
                <MenuProduct/>
                <ProductsList/>
            </div>
        </main>
    );
};

export default Products;
