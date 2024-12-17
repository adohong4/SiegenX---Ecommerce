import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"
import { assets } from '../../../assets/assets'

const Sidebar = () => {
    return (
        <div className="section-sidebar">
            <div className="sidebar">
                <div className='logo-sidebar'>
                    <img className="logo" src={assets.logofooter} alt="Logo" />
                </div>
                <div className="sidebar-options">
                    <NavLink to='/admin/dashboard' className="sidebar-option">
                        <i className="bi bi-file-earmark-bar-graph"></i>
                        <p>Dash Board</p>
                    </NavLink>

                    <NavLink to='/admin/add' className="sidebar-option">
                        <i className="bi bi-plus-circle"></i>
                        <p>Thêm sản phẩm</p>
                    </NavLink>

                    <NavLink to='/admin/product' className="sidebar-option">
                        <i className="bi bi-list-ul"></i>
                        <p>Sản phẩm</p>
                    </NavLink>

                    <NavLink to='/admin/user' className="sidebar-option">
                        <i className="bi bi-file-person"></i>
                        <p>Tài Khoản</p>
                    </NavLink>

                    <NavLink to='/admin/orders' className="sidebar-option">
                        <i className="bi bi-box"></i>
                        <p>Hóa Đơn</p>
                    </NavLink>

                    <NavLink to='/admin/contact' className="sidebar-option">
                        <i className="bi bi-box"></i>
                        <p>Liên Hệ CSKH</p>
                    </NavLink>


                    <NavLink to='http://localhost:5173/' className="sidebar-option">
                        <i className="bi bi-box"></i>
                        <p>Đăng xuất</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
