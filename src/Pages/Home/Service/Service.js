import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service: { id, name, price, description, img } }) => {
    const navigate = useNavigate()
    const navigateToServiceDetails = id => {
        navigate(`service/${id}`)
    }
    return (
        <div className=' border-2'>
            <img className=' w-[100%]' src={img} alt="" />
            <div className=' ml-4 my-4'>
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <button
                onClick={() => navigateToServiceDetails(id)}
                className=' bg-yellow-400 w-full py-2'>Book Now</button>
        </div>
    );
};

export default Service;