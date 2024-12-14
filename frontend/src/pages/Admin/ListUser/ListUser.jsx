import React, { useEffect, useContext, useState } from 'react';
import './ListUser.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { StoreContext } from '../../../context/StoreContext';

const ListUser = () => {
    const { url } = useContext(StoreContext)
    const [list, setList] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [totalUser, setTotalUser] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');// State for search term
    const [sortNameOrder, setSortNameOrder] = useState('asc');
    const [sortEmailOrder, setSortEmailOrder] = useState('asc');

    // Function to fetch the user list
    const fetchList = async (page = 1) => {
        const response = await axios.get(`${url}/v1/api/user/pagination?page=${page}&limit=20`);
        console.log('data:', response.data.data)
        if (response.data.message) {
            setList(response.data.data);
            setTotalUser(response.data.pagination.limit);
            setTotalPages(response.data.pagination.totalPages);
        } else {
            toast.error("Error");
        }
    };

    useEffect(() => {
        fetchList(currentPage);
    }, [currentPage]);

    // Function to search users
    const handleSearch = async () => {
        if (searchTerm.trim() === '') {
            // If no search term, fetch the original user list
            await fetchList(currentPage);
            return;
        }

        // const response = await axios.get(`${url}/api/user/getUserName/search?term=${searchTerm}`);
        const response = await axios.get(`${url}/v1/api/admin/getAllUser`, { params: { term: searchTerm } })
        if (response.data.status) {
            setList(response.data.data);
            setTotalUser(response.data.totalUsers);
            setTotalPages(response.data.totalPages);
        } else {
            toast.error("Error");
        }
    };

    // Function to delete user
    const removeUser = async () => {
        const response = await axios.post(`${url}/v1/api/admin/deleteUser/${currentUser._id}`);
        await fetchList(currentPage); // Fetch list again after deletion
        if (response.data.success) {
            toast.success(response.data.message);
        } else {
            toast.error("Error");
        }
    };

    // Function to handle update
    const handleUpdate = async () => {
        const formData = {
            name: currentUser.username,
            email: currentUser.email,
            password: currentUser.password ? currentUser.password : undefined
        };

        try {
            const response = await axios.put(`${url}/api/user/updateUser/${currentUser._id}`, formData);
            if (response.data.success) {
                toast.success('Updated successfully');
                await fetchList(currentPage); // Update the list after successful update
                closePopup(); // Close the popup
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Error updating User');
        }
    };

    // Function to handle input changes
    const handleChange = (e) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    };

    const handlePageClick = (event) => {
        setCurrentPage(+event.selected + 1);
    }

    const sortByName = () => {
        const newOrder = sortNameOrder === 'asc' ? 'desc' : 'asc';
        setSortNameOrder(newOrder);
        const sortedList = [...list].sort((a, b) => newOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        setList(sortedList);
    };

    const sortByEmail = () => {
        const newOrder = sortEmailOrder === 'asc' ? 'desc' : 'asc';
        setSortEmailOrder(newOrder);
        const sortedList = [...list].sort((a, b) => newOrder === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email));
        setList(sortedList);
    };

    return (
        <div className='user-list-container'>
            <p>User List</p>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Type to search.."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch} >
                    <i class="bi bi-search"></i>
                </button>
            </div>

            <table className="user-list-table">
                <thead>
                    <tr className="table-header">
                        <th onClick={sortByName} style={{ cursor: 'pointer' }}>
                            Name {sortNameOrder === 'asc' ? '↑' : '↓'}
                        </th>
                        <th onClick={sortByEmail} style={{ cursor: 'pointer' }}>
                            Email {sortEmailOrder === 'asc' ? '↑' : '↓'}
                        </th>
                        {/* <th>Password</th> */}
                        <th>Delete</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index} className='table-row'>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            {/* <td>{item.password}</td> */}
                            <td>
                                <button onClick={() => removeUser(item._id)} className='btn-delete'> Delete</button>
                            </td>
                            <td>
                                <button onClick={() => openUpdatePopup(item)} className="btn-update">Update</button>
                            </td>
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
        </div>
    );
};

export default ListUser
