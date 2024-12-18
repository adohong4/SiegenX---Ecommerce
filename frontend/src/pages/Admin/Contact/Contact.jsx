import React, { useEffect, useContext, useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../../context/StoreContext';

const Contact = () => {
    const { url } = useContext(StoreContext);
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState({ name: 'asc', email: 'asc' });
    const [selectedRow, setSelectedRow] = useState(null); // Lưu thông tin hàng được chọn
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Trạng thái mở/đóng popup

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/v1/api/contact/get`);
            if (response.data.status) {
                setList(response.data.metadata.contacts);
            } else {
                toast.error("Error fetching contacts");
            }
        } catch (error) {
            toast.error("Error fetching contacts");
        }
    };

    useEffect(() => {
        fetchList();
    }, []); // Chỉ gọi một lần khi component mount

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            fetchList();
            return;
        }

        try {
            const response = await axios.get(`${url}/v1/api/admin/getAllUser`, { params: { term: searchTerm } });
            if (response.data.status) {
                setList(response.data.data);
            } else {
                toast.error("Error searching contacts");
            }
        } catch (error) {
            toast.error("Error searching contacts");
        }
    };

    const removeUser = async (id) => {
        try {
            const response = await axios.post(`${url}/v1/api/admin/deleteUser/${id}`);
            if (response.data.success) {
                toast.success(response.data.message);
                fetchList(); // Fetch lại danh sách sau khi xóa
            } else {
                toast.error("Error deleting user");
            }
        } catch (error) {
            toast.error("Error deleting user");
        }
    };

    const sortBy = (field) => {
        const newOrder = sortOrder[field] === 'asc' ? 'desc' : 'asc';
        setSortOrder({ ...sortOrder, [field]: newOrder });
        const sortedList = [...list].sort((a, b) =>
            newOrder === 'asc' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field])
        );
        setList(sortedList);
    };

    const openPopup = (row) => {
        setSelectedRow(row);
        setIsPopupOpen(true);
        document.body.classList.add('popup-open');
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedRow(null);
        document.body.classList.remove('popup-open');
    };

    return (
        <div className='user-list-container'>
            <p>Contacts List</p>
            <div className='search'>
                <div className='search-CSKH'>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className='search-input'
                    />
                    <button onClick={handleSearch} className='btn-search'>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>

            <table className="user-list-table">
                <thead>
                    <tr className="table-header">
                        <th onClick={() => sortBy('username')} style={{ cursor: 'pointer' }}>
                            Tên {sortOrder.name === 'asc' ? '↑' : '↓'}
                        </th>
                        <th onClick={() => sortBy('email')} style={{ cursor: 'pointer' }}>
                            Email {sortOrder.email === 'asc' ? '↑' : '↓'}
                        </th>
                        <th>SĐT</th>
                        <th>Nội dung</th>
                        <th onClick={() => sortBy('time')} style={{ cursor: 'pointer' }}>
                            Thời gian {sortOrder.time === 'asc' ? '↑' : '↓'}
                        </th>
                        <th>Kiểm tra</th>
                        <th>Tùy chỉnh</th>

                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item._id} className='table-row' onClick={() => openPopup(item)}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.content}</td>
                            <td>
                                <button onClick={(e) => { e.stopPropagation(); removeUser(item._id); }} className='btn-delete'>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isPopupOpen && selectedRow && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content-cskh" onClick={(e) => e.stopPropagation()}>
                        <button className="close-popup" onClick={closePopup}>×</button>
                        <div className="popup-header">
                            <h3>Chi tiết thông tin</h3>
                        </div>
                        <div className="popup-body">
                            <div className="popup-info">
                                <label><strong>Tên:</strong></label>
                                <p>{selectedRow.username}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>Email:</strong></label>
                                <p>{selectedRow.email}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>SĐT:</strong></label>
                                <p>{selectedRow.phone}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>Nội dung:</strong></label>
                                <p>{selectedRow.content}</p>
                            </div>
                        </div>
                        <div className="popup-footer">
                            <button onClick={closePopup} className="popup-close-btn">Đóng</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
