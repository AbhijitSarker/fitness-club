import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'

const Gym = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch("exercise.json")
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);


    return (
        <div className='gym-container'>
            <div className='ex-container'>
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                    ></Exercise>)
                }

            </div>
            <div className='dashboard-container'>
                <h1>Dashboard</h1>
            </div>



        </div>
    );
};

export default Gym;