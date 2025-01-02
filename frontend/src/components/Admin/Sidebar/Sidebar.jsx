import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"
import { assets } from '../../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle, faListUl, faUser, faBoxOpen, faHeadset, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="section-sidebar">
            <div className="sidebar">
                <div className='logo-sidebar'>
                    <img className="logo" src={assets.logofooter} alt="Logo" />
                </div>
                <div className="sidebar-options">
                    <NavLink to='/admin/dashboard' className="sidebar-option">
                        <FontAwesomeIcon icon={faChartBar} />
                        <p>Tổng quan</p>
                    </NavLink>

                    <NavLink to='/admin/add' className="sidebar-option">
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <p>Thêm sản phẩm</p>
                    </NavLink>

                    <NavLink to='/admin/product' className="sidebar-option">
                        <FontAwesomeIcon icon={faListUl} />
                        <p>Sản phẩm</p>
                    </NavLink>

                    <NavLink to='/admin/user' className="sidebar-option">
                        <FontAwesomeIcon icon={faUser} />
                        <p>Tài Khoản</p>
                    </NavLink>

                    <NavLink to='/admin/orders' className="sidebar-option">
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <p>Hóa Đơn</p>
                    </NavLink>

                    <NavLink to='/admin/contact' className="sidebar-option">
                        <FontAwesomeIcon icon={faHeadset} />
                        <p>Liên Hệ CSKH</p>
                    </NavLink>



                </div>
                <div className='log-out-btn'>
                    <NavLink to='http://localhost:5173/' className="sidebar-option-logout">
                        <p>Đăng xuất</p>
                        <FontAwesomeIcon icon={faSignOutAlt} />

                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
