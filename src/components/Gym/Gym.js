import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'
import Dashboard from '../Dashboard/Dashboard';

const Gym = () => {

    const [exercises, setExercises] = useState([]);

    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
        fetch("exercise.json")
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const handleAddToDashboard = (exercise) => {
        const newDashboard = [...dashboard, exercise];
        setDashboard(newDashboard);
    };


    return (
        <div className='gym-container'>
            <div className='ex-container'>
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToDashboard={handleAddToDashboard}

                    ></Exercise>)
                }

            </div>
            <div className='dashboard-container'>

                <Dashboard
                    dashboard={dashboard}

                ></Dashboard>

            </div>



        </div>
    );
};

export default Gym;