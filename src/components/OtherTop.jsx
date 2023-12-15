import React from 'react';
import './style/OtherTop.css'
import { Link, useNavigate } from 'react-router-dom';

const OtherTop = () => {

    const navigate = useNavigate(); 

    const handleClick =() => {
        navigate(-1);
    }


    return (
        <div className='add-top'>
            <div className='add-top-button'>
            <i className='fi-rr-angle-left'></i>
            <label onClick={handleClick}>back</label>
            </div>

            <div className='add-top-button'>
            <i className='fi-rr-cross-circle'></i>
            <label onClick={handleClick}>cancel</label>
            </div>

        </div>
    );
}

export default OtherTop;