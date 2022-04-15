import React from 'react';

const Expert = ({ expert: { name, img } }) => {
    return (
        <div className=' border-2'>
            <img className=' w-[100%]' src={img} alt="" />
            <div className=' ml-4 my-4'>
                <p className=' text-2xl '>{name}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem tempora magnam sequi quidem dolore est deleniti veritatis! Laudantium, dolorem.</p>
            </div>
            <button className=' bg-yellow-400 w-full py-2'>Book Now</button>
        </div>
    );
};

export default Expert;