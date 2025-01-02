import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { StoreContext } from '../../../context/StoreContext';


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


    const chartData = {
        labels: ['Người dùng', 'Đơn hàng', 'Sản phẩm', 'Liên hệ'],
        datasets: [
            {
                label: 'Người dùng',
                data: [
                    20,
                    15,
                    30,
                    20,
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)', // Color for Total Users
                    'rgba(255, 99, 132, 0.6)', // Color for Total Orders
                    'rgba(255, 206, 86, 0.6)', // Color for Total Foods
                    'rgba(54, 162, 235, 0.6)', // Color for Total Revenue
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            },
        ],
    };

    return (
        <div className="column-chart-container">
            <div className='orders-right-2'>
                <Bar data={chartData} options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: 'Tổng quan'
                        }
                    }
                }} />
            </div>
        </div>
    );
};

export default Factors;
