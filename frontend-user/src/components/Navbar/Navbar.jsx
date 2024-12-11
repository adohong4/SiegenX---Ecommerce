import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';



const Navbar = () => {
    const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
    const [isCartDropdownVisible, setCartDropdownVisible] = useState(false);

    const toggleUserDropdown = () => {
        setUserDropdownVisible(!isUserDropdownVisible);
        setCartDropdownVisible(false); 
    };

    const toggleCartDropdown = () => {
        setCartDropdownVisible(!isCartDropdownVisible);
        setUserDropdownVisible(false); 
    };

    return (
        <header className="nav-header" id="header">
            <div className="container header-top">
                <div className="top-row-header">
                    <Link className="navbar-brand d-flex align-items-center header-logo" to="/">
                        <img src={assets.logo} alt="SiegenX Logo" style={{ height: '60px' }} />
                    </Link>
                </div>
                <div className="mid-row-header">
                    {/* Menu giữa */}
                    <div className="mid-row-header-1">
                        <div className="mid-left">
                            <ul>
                                <li>SiegenX</li>
                                <li>SiegenX Object</li>
                                <li>SiegenX LED</li>
                            </ul>
                        </div>
                        <div className="mid-right">
                            <div className="search-bar">
                                <input type="text" placeholder="Tìm kiếm" />
                                <button className="search-button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                            <div className="icons">
                                <span className="icon-user" onClick={toggleUserDropdown}>
                                    <i className="fas fa-user"></i>
                                </span>
                                {isUserDropdownVisible && (
                                    <div className={`dropdown-menu ${isUserDropdownVisible ? "show" : ""}`}>
                                        <ul>
                                            <li><a href="/login">Login</a></li>
                                            <li><a href="/logout">Logout</a></li>
                                            <li><a href="/profile">My Profile</a></li>
                                        </ul>
                                    </div>
                                )}
                                <span className="icon-cart" onClick={toggleCartDropdown}>
                                    <i className="fas fa-shopping-cart"></i>
                                </span>
                                {isCartDropdownVisible && (
                                    <div className={`dropdown-menu-cart ${isCartDropdownVisible ? "show" : ""}`}>
                                        <ul>
                                            <li><a href="/Cart">My Cart</a></li>
                                            <li><a href="/myorder">My Order</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Menu điều hướng */}
                    <div className="mid-row-header-2">
                        <div className="nav-bar-header-left">
                            <ul>
                                <li><Link to="/">Trang Chủ</Link></li>
                                <li><Link to="/about">Giới thiệu</Link></li>
                                <li><a href="#">Sản phẩm</a></li>
                                <li><a href="#">Giải pháp</a></li>
                                <li><a href="/contact">Liên hệ</a></li>
                            </ul>
                        </div>
                        {/* Hotline */}
                        <div className="nav-bar-header-right">
                            <div className="hotline">
                                <p>
                                    <span className="label-hotline">Hotline</span> 
                                    <span className="sdt" >
                                        <a href="https://zalo.me/0982848203">0982848203</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
