import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={assets.logo} alt="SiegenX Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                TRANG CHỦ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                GIỚI THIỆU
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/capabilities">
                                HỒ SƠ NĂNG LỰC
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                SẢN PHẨM
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">
                                DỰ ÁN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">
                                TIN TỨC
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                LIÊN HỆ
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <div className="user-actions">
                        <img src="user-profile-icon.png" alt="User Profile" className="user-icon" />
                        <img src="shopping-cart-icon.png" alt="Shopping Cart" className="cart-icon" />
                    </div>
                    <button className="btn btn-success hotline-button">HOTLINE: 091 343 6666</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
