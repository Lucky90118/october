import React from 'react';
import Left from '../../components/dashboard/left';
import Right from '../../components/dashboard/right';
import './index.scss';

const Dashboard = () => {
    
    return (
        <div className='dashboard'>
            <Left />
            <Right />
        </div>
    )
}

export default Dashboard;