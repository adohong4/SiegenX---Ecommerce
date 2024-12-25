import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${url}/v1/api/order/userOrder`, { headers: { token } });

            if (response.data.status) {
                setOrders(response.data.metadata);
                setIsLoading(false);
            } else {
                toast.error('Không thể lấy thông tin đơn hàng!');
                setIsLoading(false);
            }
        } catch (error) {
            toast.error('Lỗi khi kết nối với máy chủ!');
            setIsLoading(false);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="My-Order">
            <div className="container myorder-container">
                <div className="top-tittle-order">
                    <h2>Đơn hàng của tôi</h2>
                </div>
                {isLoading ? (
                    <div className="loading">
                        <p>Đang tải dữ liệu...</p>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="no-orders">
                        <p>Bạn chưa có đơn hàng nào.</p>
                    </div>
                ) : (
                    <table className="myorder-table">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Ngày đặt</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Cập nhật đơn hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.amount.toLocaleString()} VND</td>
                                    <td>
                                        <span
                                            className={`status-badge ${order.status
                                                .toLowerCase()
                                                .replace(/\s+/g, '-')}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="btn-updates" onClick={fetchOrders}
                                        >
                                            Cập nhật đơn hàng
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
