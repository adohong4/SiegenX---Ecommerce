import React from 'react'
import './Dashboard.css';
import Factors from '../../../components/Admin/Dashboard/Factors';
import ColumnChart from '../../../components/Admin/Dashboard/ColumnChart';
import OrderTable from '../../../components/Admin/Dashboard/OrderTable';
import LineChart from '../../../components/Admin/Dashboard/LineChart';

const DashBoard = () => {
    return (
        <div className='Dashboard'>
            <Factors />
            <ColumnChart />
            <OrderTable />
            <LineChart />
        </div>
    )
}

export default DashBoard
