import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"
import { assets } from '../../../assets/assets'

const Sidebar = () => {
    return (
        <div className="section-sidebar">
            <div className="sidebar">
                <div className='logo-sidebar'>
                    <img className="logo" src={assets.logo} alt="Logo" />
                </div>
                <div className="sidebar-options">
                    <NavLink to='/admin/dashboard' className="sidebar-option">
                        <i className="bi bi-file-earmark-bar-graph"></i>
                        <p>Dash Board</p>
                    </NavLink>

                    <NavLink to='/admin/add' className="sidebar-option">
                        <i className="bi bi-plus-circle"></i>
                        <p>Add Product</p>
                    </NavLink>

                    <NavLink to='/admin/list' className="sidebar-option">
                        <i className="bi bi-list-ul"></i>
                        <p>List Product</p>
                    </NavLink>

                    <NavLink to='/admin/user' className="sidebar-option">
                        <i className="bi bi-file-person"></i>
                        <p>List User</p>
                    </NavLink>

                    <NavLink to='/admin/orders' className="sidebar-option">
                        <i className="bi bi-box"></i>
                        <p>List Order</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
