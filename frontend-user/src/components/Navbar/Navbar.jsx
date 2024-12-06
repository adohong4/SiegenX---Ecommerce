import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';


const Navbar = () => {
    return (
        <header className='nav-header' id='header'>
            <div className="container header-top">
                <div className='top-row-header'>
                    <Link className="navbar-brand d-flex align-items-center header-logo" to="/">
                        <img src={assets.logo} alt="SiegenX Logo" style={{ height: '60px' }} />
                    </Link>
                </div>
                <div className='mid-row-header'>
                    <div className='mid-row-header-1'>
                        <div className='mid-left'>
                            <ul>
                                <li>SiegenX</li>
                                <li>SiegenX Object</li>
                                <li>SiegenX LED</li>
                            </ul>
                        </div>
                        <div className='mid-right'>

                        </div>
                    </div>
                    <div className='mid-row-header-2'>
                        <div className='nav-bar-header-left'>
                            <ul>
                                <li>
                                    <a href="#">Trang Chủ</a>
                                </li>
                                <li>
                                    <a href="/about">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="#">Sản phẩm</a>
                                </li>
                                <li>
                                    <a href="#">Giải pháp</a>
                                </li>
                                <li>
                                    <a href="#">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                        <div className='nav-bar-header-right'>
                            <div className='hotline'>
                                <p>Hotline <span> 0982848203</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </header>

    );
};

export default Navbar;
