import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")

    }

    const location = useLocation();
    const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
    const [isCartDropdownVisible, setCartDropdownVisible] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    const navLinks = ["/", "/about", "/contact"]; // Danh sách các đường dẫn điều hướng

    useEffect(() => {
        if (navLinks.includes(location.pathname)) {
            setActiveLink(location.pathname);
        } else {
            setActiveLink("");
        }
    }, [location.pathname]);

    const toggleUserDropdown = () => {
        setUserDropdownVisible(!isUserDropdownVisible);
        setCartDropdownVisible(false);
    };

    const toggleCartDropdown = () => {
        setCartDropdownVisible(!isCartDropdownVisible);
        setUserDropdownVisible(false);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setUserDropdownVisible(false);
        setCartDropdownVisible(false);
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
                                {!token ? (
                                    <button className="btn btn-signin btn-primary" onClick={() => { navigate('/login') }}>
                                        Đăng Nhập
                                    </button>
                                ) : (
                                    <div className="navbar-profile col-2 dropdown">
                                        <span className="icon-user" onClick={toggleUserDropdown}>
                                            <i className="fas fa-user"></i>
                                        </span>
                                        {isUserDropdownVisible && (
                                            <div className={`dropdown-menu ${isUserDropdownVisible ? "show" : ""}`}>
                                                <ul>
                                                    <li onClick={() => navigate('/order')}>My Order</li>
                                                    <li onClick={() => navigate('/profile')}>My Profile</li>
                                                    <li onClick={logout}>Logout</li>
                                                </ul>
                                            </div>
                                        )}

                                        <span className="icon-cart" onClick={toggleCartDropdown}>
                                            <Link to="/cart">
                                                <i className="fas fa-shopping-cart"></i>
                                            </Link>
                                        </span>

                                    </div>
                                )}
                            </div>


                        </div>
                    </div>
                    {/* Menu điều hướng */}
                    <div className="mid-row-header-2">
                        <div className="nav-bar-header-left">
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className={activeLink === "/" ? "active" : ""}
                                        onClick={() => handleLinkClick("/")}
                                    >
                                        Trang Chủ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className={activeLink === "/about" ? "active" : ""}
                                        onClick={() => handleLinkClick("/about")}
                                    >
                                        Giới thiệu
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/product"
                                        className={activeLink === "products" ? "active" : ""}
                                        onClick={() => handleLinkClick("products")}
                                    >
                                        Sản phẩm
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/solutions"
                                        className={activeLink === "/solutions" ? "active" : ""}
                                        onClick={() => handleLinkClick("/solutions")}
                                    >
                                        Giải pháp
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className={activeLink === "/contact" ? "active" : ""}
                                        onClick={() => handleLinkClick("/contact")}
                                    >
                                        Liên hệ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Hotline */}
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
        </header>
    );
};

export default Navbar;
