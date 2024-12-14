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

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/v1/api/contact/get`);
            // console.log('data:', response.data.metadata.contacts)
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

    return (
        <div className='user-list-container'>
            <p>Contacts List</p>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>

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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item._id} className='table-row'>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.content}</td>
                            <td>
                                <button onClick={() => removeUser(item._id)} className='btn-delete'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contact;
