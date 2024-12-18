import React, { useEffect, useContext, useState } from 'react';
import './ListUser.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { StoreContext } from '../../../context/StoreContext';
import PopupUser from '../../../components/Popup/UserPopup/PopupUser';

const ListUser = () => {
    const { url } = useContext(StoreContext);
    const [list, setList] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [totalUser, setTotalUser] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortNameOrder, setSortNameOrder] = useState('asc');
    const [sortEmailOrder, setSortEmailOrder] = useState('asc');

    const openUpdatePopup = (user) => {
        setCurrentUser(user);
        setIsPopupOpen(true);
        document.body.classList.add('popup-open');
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setCurrentUser(null);
        document.body.classList.remove('popup-open');
    };


    const fetchList = async (page = 1) => {
        try {
            const response = await axios.get(`${url}/v1/api/user/pagination?page=${page}&limit=10`);
            if (response.data.message) {
                setList(response.data.data);
                setTotalUser(response.data.pagination.limit);
                setTotalPages(response.data.pagination.totalPages);
            } else {
                toast.error('Error fetching user list');
            }
        } catch (error) {
            toast.error('Error fetching data');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchList(currentPage);
    }, [currentPage]);

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            await fetchList(currentPage);
            return;
        }
        try {
            const response = await axios.get(`${url}/v1/api/admin/getAllUser`, { params: { term: searchTerm } });
            if (response.data.status) {
                setList(response.data.data);
                setTotalUser(response.data.totalUsers);
                setTotalPages(response.data.totalPages);
            } else {
                toast.error('Error searching users');
            }
        } catch (error) {
            toast.error('Error searching users');
        }
    };

    const removeUser = async (userId) => {
        try {
            const response = await axios.post(`${url}/v1/api/admin/deleteUser/${userId}`);
            if (response.data.success) {
                toast.success(response.data.message);
                await fetchList(currentPage);
            } else {
                toast.error('Error deleting user');
            }
        } catch (error) {
            toast.error('Error deleting user');
        }
    };

    const handleUpdate = async () => {
        try {
            const formData = {
                username: currentUser.username,
                email: currentUser.email,
                password: currentUser.password ? currentUser.password : undefined,
            };
            const response = await axios.put(`${url}/api/user/updateUser/${currentUser._id}`, formData);
            if (response.data.success) {
                toast.success('Updated successfully');
                await fetchList(currentPage);
                closePopup();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error updating user');
        }
    };

    const handlePageClick = (event) => {
        setCurrentPage(+event.selected + 1);
    };

    const sortByName = () => {
        const newOrder = sortNameOrder === 'asc' ? 'desc' : 'asc';
        setSortNameOrder(newOrder);
        const sortedList = [...list].sort((a, b) =>
            newOrder === 'asc' ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username)
        );
        setList(sortedList);
    };

    const sortByEmail = () => {
        const newOrder = sortEmailOrder === 'asc' ? 'desc' : 'asc';
        setSortEmailOrder(newOrder);
        const sortedList = [...list].sort((a, b) =>
            newOrder === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email)
        );
        setList(sortedList);
    };

    const handleInputChange = (e) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    };

    return (
        <div className="user-list-container">
            <p>User List</p>
            <div className="search">
                <div className="search-CSKH">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className="search-input"
                    />
                    <button onClick={handleSearch} className="btn-search">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>

            <table className="user-list-table">
                <thead>
                    <tr className="table-header">
                        <th onClick={sortByName} style={{ cursor: 'pointer' }}>
                            Tài Khoản {sortNameOrder === 'asc' ? '↑' : '↓'}
                        </th>
                        <th onClick={sortByEmail} style={{ cursor: 'pointer' }}>
                            Email {sortEmailOrder === 'asc' ? '↑' : '↓'}
                        </th>
                        <th>Tùy chỉnh</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index} className="table-row">
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <div>
                                <td>
                                    <button onClick={() => removeUser(item._id)} className="btn-delete">
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => openUpdatePopup(item)} className="btn-update">
                                        Update
                                    </button>
                                </td>
                            </div>

                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />

            <PopupUser
                isOpen={isPopupOpen}
                onClose={closePopup}
                userData={currentUser}
                onChange={handleInputChange}
                onSave={handleUpdate}
            />
        </div>
    );
};

export default ListUser;
