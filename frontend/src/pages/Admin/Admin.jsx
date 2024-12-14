import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import ListUser from './ListUser/ListUser';

const Admin = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div className="admin-content">
                <Routes>
                    <Route path="user" element={<ListUser />} />
                </Routes>
            </div>

        </div>
    )
}

export default Admin;