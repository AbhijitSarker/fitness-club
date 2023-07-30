import React from 'react';
import './Exercise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faFaceAngry } from '@fortawesome/free-solid-svg-icons'


const Exercise = ({ exercise, handleAddToDashboard }) => {
    const { name, age, time, about } = exercise;



    return (
        <div className='exercise'>
            <img className='image' src={require('../../images/gym.jpg')} alt="fg" />
            <div className='exercise-info'>
                <h3>{name.slice(0, 300)}</h3>
                <p>{about}</p>
                <p>For Age: {age}</p>
                <p>Time Required: {time}</p>

            </div>

            <button onClick={() => handleAddToDashboard(exercise)} className='btn-dashboard'>
                <p className='btn-text'> <FontAwesomeIcon icon={faFaceAngry} />Add to List   <FontAwesomeIcon icon={faDumbbell} />   </p>

            </button>
        </div>
    );
};

export default Exercise;