import React from 'react'
import './Dashboard.css';
import Factors from '../../../components/Admin/Dashboard/Factors';
import ColumnChart from '../../../components/Admin/Dashboard/ColumnChart';
import OrderTable from '../../../components/Admin/Dashboard/OrderTable';
import LineChart from '../../../components/Admin/Dashboard/LineChart';

const DashBoard = () => {
    return (
        <div className='Dashboard'>
            <div className='section-doanhthu'>
                <div className='doanhthu-left'>
                    <Factors />
                </div>
                <div className='doanhthu-right'>
                    
                    <ColumnChart />
                </div>
            </div>
            <div className='section-thongke'>
                <div className='thongke-left'>
                    <LineChart />
                </div>
                <div className='thongke-right'>
                    <OrderTable />
                </div>
            </div>
            
            
        </div>
    )
}

export default DashBoard
