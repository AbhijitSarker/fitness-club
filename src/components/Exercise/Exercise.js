import React from 'react';
import './Exercise.css';

const Exercise = ({ exercise }) => {
    const { name, age, time, about, company } = exercise;
    return (
        <div className='exercise'>
            <img className='image' src={require('../../images/gym.jpg')} alt="fg" />
            <div className='exercise-info'>
                <h3>{name.slice(0, 300)}</h3>
                <p>{about}</p>
                <p>For Age: {age}</p>
                <p>Time Required: {time}</p>

            </div>

            <button className='btn-cart'>
                <p className='btn-text'>Add to cart</p>

            </button>
        </div>
    );
};

export default Exercise;