import React from 'react';
import './Dashboard.css';
const Dashboard = () => {
    return (

        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='profile'>
                <img className='profile-image' src={require('../../images/profile.jpg')} alt="" />
                <div className='profile-info'>
                    <p className='name'>Abhijit Sarker</p>
                    <p className='address'><small>Sylhet, Bangladesh</small></p>
                </div>
            </div>

            <div className='health'>
                <div className='health-info'>
                    <h3><b>70</b><small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div className='health-info'>
                    <h3><b>6.5</b></h3>
                    <p>Height</p>
                </div>
                <div className='health-info'>
                    <h3>25<b></b><small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>

            <div>
                <h3 className='break-title'>Add A Break</h3>
                <div className='break'>
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                </div>
            </div>

            <div className="details">
                <h3>Exercise Details</h3>
                <div className='ex-time'>
                    <h5>Exercise Time</h5>
                    <p>200 Seconds</p>
                </div>
                <div className='br-time'>
                    <h5>Break Time</h5>
                    <p>200 Seconds</p>
                </div>
            </div>

            <button className='activity-btn'>
                <p className='btn-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Dashboard;
