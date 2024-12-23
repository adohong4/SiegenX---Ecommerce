import React, { useEffect, useContext, useState } from 'react';
import './Cart.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { url, order_list, fetchOrder } = useContext(StoreContext);
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState({ 'address.fullname': 'asc', amount: 'asc' });
    const [selectedRow, setSelectedRow] = useState(null); // Lưu thông tin hàng được chọn
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Trạng thái mở/đóng popup
    const [selectedOrder, setSelectedOrder] = useState(null);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/v1/api/order/get`);
            if (response.data.status) {
                setList(response.data.metadata);
            } else {
                toast.error("Error fetching Order");
            }
        } catch (error) {
            toast.error("Error fetching Order");
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

    const statusHandler = async (event, orderId) => {
        const selectedValue = event.target.value;

        const response = await axios.put(url + "/v1/api/order/updateStatus", {
            orderId,
            status: selectedValue
        });

        if (response.data.status) {
            fetchList();
        }

        console.log(`Order ${orderId}: ${selectedValue}`);
    };

    const removeOrder = async (id) => {
        try {
            const response = await axios.delete(`${url}/v1/api/order/delete/${id}`);
            if (response.data.status) {
                toast.success(response.data.message);
                fetchList(); 
            } else {
                toast.error("Error deleting Order");
            }
        } catch (error) {
            toast.error("Exception while deleting Order");
        }
    };

    const sortBy = (field) => {
        const newOrder = sortOrder[field] === 'asc' ? 'desc' : 'asc';
    setSortOrder({ ...sortOrder, [field]: newOrder });
    const sortedList = [...list].sort((a, b) => {
        const aValue = field.includes('.') ? field.split('.').reduce((o, i) => o[i], a) : a[field];
        const bValue = field.includes('.') ? field.split('.').reduce((o, i) => o[i], b) : b[field];
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return newOrder === 'asc' ? aValue - bValue : bValue - aValue;
        } else {
            return newOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
    });
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
                        <th onClick={() => sortBy('_id')} style={{ cursor: 'pointer' }}>
                            Mã hóa đơn {sortOrder._id === 'asc' ? '↑' : '↓'}
                        </th>
                        <th onClick={() => sortBy('date')} style={{ cursor: 'pointer' }}>
                            Thời gian {sortOrder.date === 'asc' ? '↑' : '↓'}
                        </th>
                        <th onClick={() => sortBy('address.fullname')} style={{ cursor: 'pointer' }}>
                            Khách hàng {sortOrder['address.fullname'] === 'asc' ? '↑' : '↓'}
                        </th>
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
                                onChange={(event) => statusHandler(event, item._id)}
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
                                    <button onClick={(e) => { e.stopPropagation(); removeOrder(item._id); }} className='btn-delete'>
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

            {isPopupOpen && selectedRow && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content-cskh" onClick={(e) => e.stopPropagation()}>
                        <button className="close-popup" onClick={closePopup}>×</button>
                        <div className="popup-header">
                            <h3>Chi tiết thông tin</h3>
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
                                <p>{selectedRow.address.firstName}</p>
                            </div>

                            <div className="popup-info">
                                <label><strong>Chi tiết đơn hàng:</strong></label>
                                <p>{selectedRow.items[0].name}</p>
                            </div>

                            <div className="popup-info">
                                <label><strong>Giá trị đơn hàng:</strong></label>
                                <p>{(selectedRow.amount).toLocaleString()}</p>
                            </div>
                            <div className="popup-info">
                                <label><strong>Địa chỉ:</strong></label>
                                <p>{selectedRow.address.street}, {selectedRow.address.state}, {selectedRow.address.country}, {selectedRow.address.zipcode}</p>
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

export default Cart;
