import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { StoreContext } from '../../../context/StoreContext';


ChartJS.register(ArcElement, Title, Tooltip, Legend);

const Factors = () => {
    const { url } = useContext(StoreContext)

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalOrders: 0,
        totalProducts: 0,
        totalRevenue: 0,
        ordersByStatus: []
    });

    const fetchFactors = async () => {
        try {
            const response = await axios.get(`${url}/v1/api/countProducts`);
            if (response.data.status) {
                setStats(response.data.metadata);
                console.log('Fetched Factors:', response.data.metadata);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching Factors", error);
            toast.error("Failed to fetch Factors.");
        }
    };

    useEffect(() => {
        fetchFactors();
    }, [url]);


    const chartData = {
        labels: ['Người dùng', 'Đơn hàng', 'Sản phẩm', 'Thu nhập'],
        datasets: [
            {
                label: 'User Factors',
                data: [
                    stats.totalUsers,
                    stats.totalOrders,
                    stats.totalProducts,
                    stats.totalRevenue,
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)', // Color for Total Users
                    'rgba(255, 99, 132, 0.6)', // Color for Total Orders
                    'rgba(255, 206, 86, 0.6)', // Color for Total Foods
                    'rgba(54, 162, 235, 0.6)', // Color for Total Revenue
                ],
            },
        ],
    };

    return (
        <div className="user-factors-container">
            <div className='user-factors-title'>
                <h2>Thống kê</h2>
            </div>
            <div className="info-cards">
                <div className="info-card">
                    <h3>Người dùng</h3>
                    <p>{stats.totalUsers}</p>
                </div>
                <div className="info-card">
                    <h3>Sản phẩm</h3>
                    <p>{stats.totalProducts}</p>
                </div>
                <div className="info-card">
                    <h3>Đơn hàng</h3>
                    <p>{stats.totalOrders}</p>
                </div>
                <div className="info-card">
                    <h3>Doanh thu</h3>
                    {/* <p>${stats.totalRevenue.toFixed(2)}</p> */} <p>0</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Factors;
