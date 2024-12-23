import React, { useEffect, useContext, useState, useRef } from 'react';
import './Cart.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { StoreContext } from '../../../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { url } = useContext(StoreContext);
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalOrder, setTotalOrder] = useState(0);
    const [totalPages, setTotalPages] = useState(0); // Theo dõi tổng số trang
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState({ name: 'asc', email: 'asc' });
    const [selectedRow, setSelectedRow] = useState(null); // Lưu thông tin hàng được chọn
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Trạng thái mở/đóng popup
    const popupRef = useRef(null); // Tạo ref cho popup

    const handlePrint = () => {
        if (popupRef.current) {
            const printContent = popupRef.current.innerHTML;
            const originalContent = document.body.innerHTML;

            // Chuyển nội dung popup vào body để in
            document.body.innerHTML = printContent;

            // Thực hiện in
            window.print();

            // Khôi phục nội dung ban đầu
            document.body.innerHTML = originalContent;
            window.location.reload(); // Reload lại trang sau khi in xong
        }
    };

    // const handleStatusChange = async (event, orderId) => {
    //     const newStatus = event.target.value;
    //     try {
    //         const response = await axios.put(`${url}/v1/api/order/updateStatus`, { orderId, status: newStatus });
    //         if (response.data.success) {
    //             toast.success('Cập nhật trạng thái thành công!');
    //             fetchList(); // Fetch lại danh sách sau khi cập nhật
    //         } else {
    //             toast.error('Cập nhật trạng thái thất bại!');
    //         }
    //     } catch (error) {
    //         toast.error('Lỗi khi cập nhật trạng thái đơn hàng!');
    //         console.error(error);
    //     }
    // };

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/v1/api/order/get`);
            if (response.data.status) {
                setList(response.data.metadata);
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
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected + 1);
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

    const fetchListpage = async (page = 1) => {
        try {
            const response = await axios.get(`${url}/v1/api/order/pagination?page=${page}&limit=10`);
            if (response.data.message) {
                setList(response.data.data);
                setTotalOrder(response.data.pagination.limit);
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
        fetchListpage(currentPage);
    }, [currentPage]);

    return (
        <div className='order-list-container'>
            <div className='order-list-title'>
                <p>Hóa đơn</p>
            </div>

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

            <table className="order-list-table">
                <thead>
                    <tr className="table-header">
                        <th onClick={() => sortBy('username')} style={{ cursor: 'pointer' }}>
                            Mã hóa đơn {sortOrder._id === 'asc' ? '↑' : '↓'}
                        </th>
                        <th onClick={() => sortBy('date')} style={{ cursor: 'pointer' }}>
                            Thời gian {sortOrder.date === 'asc' ? '↑' : '↓'}
                        </th>
                        <th>Khách hàng</th>
                        <th>Hình thức thanh toán</th>
                        <th onClick={() => sortBy('amount')} style={{ cursor: 'pointer' }}>
                            Giá trị hóa đơn {sortOrder.amount === 'asc' ? '↑' : '↓'}
                        </th>
                        <th>Địa chỉ</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item._id} className='table-row'>
                            <td>{item._id}</td>
                            <td>{item.date}</td>
                            <td>{item.address.fullname}</td>
                            <td>{item.paymentMethod}</td>
                            <td>{(item.amount).toLocaleString()} đ</td>
                            <td>{item.address.street}, {item.address.state}, {item.address.country}, {item.address.zipcode}</td>
                            <td><select
                                onChange={(event) => handleStatusChange(event, item._id)}
                                value={item.status}
                                style={{
                                    backgroundColor: item.status === "Wait for confirmation" ? "#2c3e50" :
                                        item.status === "Food processing" ? "#d35400" :
                                            item.status === "Out for delivery" ? "#f39c12" :
                                                item.status === "Delivered" ? "#27ae60" :
                                                    "#ecf0f1",
                                    color: ["Wait for confirmation", "Food processing", "Out for delivery", "Delivered"].includes(item.status) ? "white" : "black"
                                }}
                            >
                                <option value="Wait for confirmation">Đợi xác nhận</option>
                                <option value="Food processing">Đang chuẩn bị hàng</option>
                                <option value="Out for delivery">Đang giao hàng</option>
                                <option value="Delivered">Giao hàng thành công</option>
                            </select></td>
                            <div>
                                <td>
                                    <button onClick={(e) => { e.stopPropagation(); removeUser(item._id); }} className='btn-delete'>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => openPopup(item)} className='btn-info'>
                                        <FontAwesomeIcon icon={faEye} />
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


            {isPopupOpen && selectedRow && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content-cskh" onClick={(e) => e.stopPropagation()}
                        ref={popupRef}>
                        <button className="close-popup" onClick={closePopup}>×</button>
                        <div className="popup-header">
                            <h3>Chi tiết hóa đơn</h3>
                        </div>
                        <div className="popup-body">
                            <div className="popup-info">
                                <label><strong>Mã hóa đơn:</strong></label>
                                <p>{selectedRow._id}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>Thời gian:</strong></label>
                                <p>{selectedRow.date}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>Khách hàng:</strong></label>
                                <p>{selectedRow.address?.fullname || 'Không có thông tin'}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>Hình thức thanh toán:</strong></label>
                                <p>{selectedRow.paymentMethod || 'Không có thông tin'}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>Giá trị đơn hàng:</strong></label>
                                <p>{(selectedRow.amount).toLocaleString()} VND</p>
                            </div>
                            <div className="popup-info" style={{ display: 'block' }}>
                                <label><strong>Địa chỉ:</strong></label>
                                <p>
                                    {selectedRow.address?.street}, {selectedRow.address?.state}, {selectedRow.address?.country}, {selectedRow.address?.zipcode}
                                </p>
                            </div>
                            <div className="popup-info" style={{ display: 'block' }}>
                                <label><strong>Sản phẩm đã mua:</strong></label>
                                {selectedRow.items && selectedRow.items.length > 0 ? (
                                    <table className="product-table">
                                        <thead>
                                            <tr>
                                                <th>Tên sản phẩm</th>
                                                <th>Số lượng</th>
                                                <th>Giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedRow.items.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.nameProduct}</td>
                                                    <td style={{ textAlign: 'center' }} >{item.quantity}</td>
                                                    <td style={{ textAlign: 'center' }}>{item.price.toLocaleString()} </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>Không có sản phẩm nào.</p>
                                )}
                            </div>
                            <div className="popup-footer">
                                <div className="popup-printf">
                                    <button onClick={handlePrint} className="popup-print-btn">In hóa đơn</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;
