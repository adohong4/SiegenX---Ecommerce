import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import ListUser from './ListUser/ListUser';
import ListProduct from './ListProduct/ListProduct';
import Contact from './Contact/Contact';

const Admin = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div className="admin-content">
                <Routes>
                    <Route path="user" element={<ListUser />} />
                    <Route path="product" element={<ListProduct />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>

        </div>
    )
}

export default Admin;