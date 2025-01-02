import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { StoreContext } from '../../../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Factors = () => {
    const { url } = useContext(StoreContext)

    const [stats, setStats] = useState({
        totalUsers: 20,
        totalOrders: 15,
        totalProducts: 30,
        totalRevenue: 20,
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

    return (
        <div className="user-factors-container">
            <div className='user-factors-title'>
                <h2>Thống kê</h2>
            </div>
            <div className="info-cards">
                <div className="info-card">
                    <FontAwesomeIcon icon={faUsers} className="info-icon" />
                    <div className='tt'>
                        <h3>Người dùng</h3>
                        <p>{stats.totalUsers}</p>
                    </div>
                </div>
                <div className="info-card">
                    <FontAwesomeIcon icon={faBox} className="info-icon" />
                    <div className='tt'>
                        <h3>Sản phẩm</h3>
                        <p>{stats.totalProducts}</p>
                    </div>
                </div>
                <div className="info-card">
                    <FontAwesomeIcon icon={faShoppingCart} className="info-icon" />
                    <div className='tt'>
                        <h3>Đơn hàng</h3>
                        <p>{stats.totalOrders}</p>
                    </div>
                    
                </div>
                <div className="info-card">
                    <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                    <div className='tt'>
                        <h3>Liên hệ</h3>
                        <p>{stats.totalContacts}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Factors;
