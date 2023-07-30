import React, { useState } from 'react';
import './Dashboard.css';
const Dashboard = ({ dashboard }) => {

    // console.log(dashboard[0].time);
    let exerciseTime = 0;

    for (const exercise of dashboard) {
        exerciseTime = exerciseTime + exercise.time;
    }

    const [breaks, setBreaks] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const handleClick = event => {

        // 👇️ toggle styles on click
        if (event.currentTarget.style.backgroundColor) {
            event.currentTarget.style.backgroundColor = null;
            event.currentTarget.style.color = null;
        } else {
            event.currentTarget.style.backgroundColor = 'salmon';
            event.currentTarget.style.color = 'white';
        }

        let breaks = parseInt(event.currentTarget.textContent);

        setBreaks(breaks);
    };

    const findTotalTime = () => {
        const totalTime = exerciseTime + breaks;
        setTotalTime(totalTime);

    }


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
                    <p onClick={handleClick}>10s</p>
                    <p onClick={handleClick}>20s</p>
                    <p onClick={handleClick} >30s</p>
                    <p onClick={handleClick}>40s</p>
                    <p onClick={handleClick}>50s</p>
                </div>
            </div>

            <div className="details">
                <h3>Exercise Details</h3>
                <div className='ex-time'>
                    <h5>Exercise Time:</h5>
                    <p>{exerciseTime} Seconds</p>
                </div>
                <div className='br-time'>
                    <h5>Break Time</h5>
                    <p>{breaks} Seconds</p>
                </div>

            </div>

            <button onClick={() => { findTotalTime() }} className='activity-btn'>
                <p className='btn-text'>Activity Completed</p>
            </button>
            <div className='total-time'>
                <h5>Total Time Taken</h5>
                <p>{totalTime} Seconds</p>
            </div>
        </div>
    );
};

export default Dashboard;
