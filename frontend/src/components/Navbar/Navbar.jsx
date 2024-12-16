import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    };

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <header className="nav-header">
            <div className="container">
                {/* Desktop Navbar */}
                <div className="pc-display">
                    <div className="top-row-header">
                        <div
                            className="navbar-brand header-logo"
                            onClick={() => navigate('/')}
                        >
                            {/* <img src={assets.logo} alt="SiegenX Logo" style={{ height: '60px' }} /> */}
                        </div>
                    </div>
                    <div className="mid-row-header">
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
                                    {!token ? (
                                        <button
                                            className="btn btn-signin btn-primary"
                                            onClick={() => navigate('/login')}
                                        >
                                            Đăng Nhập
                                        </button>
                                    ) : (
                                        <div className="dropdown">
                                            <span className="icon-user">
                                                <i className="fas fa-user"></i>
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li onClick={() => navigate('/order')}>My Order</li>
                                                <li onClick={() => navigate('/profile')}>My Profile</li>
                                                <li onClick={handleLogout}>Logout</li>
                                            </ul>
                                        </div>
                                    )}
                                    <span className="icon-cart" onClick={() => navigate('/cart')}>
                                        <i className="fas fa-shopping-cart"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mid-row-header-2">
                            <div className="nav-bar-header-left">
                                <ul>
                                    {[
                                        { path: '/', label: 'Trang Chủ' },
                                        { path: '/about', label: 'Giới Thiệu' },
                                        { path: '/product', label: 'Sản Phẩm' },
                                        { path: '/solutions', label: 'Giải Pháp' },
                                        { path: '/contact', label: 'Liên Hệ' },
                                    ].map((item) => (
                                        <li key={item.path}>
                                            <div
                                                className={`navbar-item ${
                                                    activeLink === item.path ? 'active' : ''
                                                }`}
                                                onClick={() => navigate(item.path)}
                                            >
                                                {item.label}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="nav-bar-header-right">
                                <div className="hotline">
                                    <p>
                                        <span className="label-hotline">Hotline</span>
                                        <span className="sdt">
                                            <a href="https://zalo.me/0982848203">0982848203</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="mobile-display">
                    <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navbar-brand" onClick={() => navigate('/')}> 
                        <img src={assets.logo} alt="SiegenX Logo" className="logo" />
                    </div>
                    <div className="nav-icons">
                        <i className="fas fa-search" onClick={() => navigate('/search')}></i>
                        {token ? (
                            <i className="fas fa-user" onClick={() => navigate('/profile')}></i>
                        ) : (
                            <i className="fas fa-sign-in-alt" onClick={() => navigate('/login')}></i>
                        )}
                        <i className="fas fa-shopping-cart" onClick={() => navigate('/cart')}></i>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="menu-content">
                        <ul>
                            <li onClick={() => handleNavigate('/')}>Trang Chủ</li>
                            <li onClick={() => handleNavigate('/about')}>Giới Thiệu</li>
                            <li onClick={() => handleNavigate('/product')}>Sản Phẩm</li>
                            <li onClick={() => handleNavigate('/solutions')}>Giải Pháp</li>
                            <li onClick={() => handleNavigate('/contact')}>Liên Hệ</li>
                        </ul>
                        <div className="search-bar">
                            <input type="text" placeholder="Tìm kiếm" />
                            <button>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        {!token ? (
                            <button
                                className="btn btn-signin"
                                onClick={() => handleNavigate('/login')}
                            >
                                Đăng Nhập
                            </button>
                        ) : (
                            <ul>
                                <li onClick={() => handleNavigate('/order')}>Đơn Hàng</li>
                                <li onClick={() => handleNavigate('/profile')}>Tài Khoản</li>
                                <li onClick={handleLogout}>Đăng Xuất</li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
