import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import ListUser from './ListUser/ListUser';
import ListProduct from './ListProduct/ListProduct';
import Contact from './Contact/Contact';
import AddProduct from './AddProduct/AddProduct';
import '../Admin/Admin.css'

const Admin = () => {
    return (
        <div className="admin-container">
            <div className='sidebar-left'>
                <Sidebar />
            </div>
            <div className="admin-content sidebar-right">
                <Routes>
                    <Route path="user" element={<ListUser />} />
                    <Route path="product" element={<ListProduct />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="add" element={<AddProduct />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;