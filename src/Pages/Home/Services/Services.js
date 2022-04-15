import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' w-[90%] mx-auto'>
            <p className=' text-6xl text-center my-10'>Services:</p>
            <div className=' grid  md:grid-cols-2 lg:grid-cols-3 gap-20'>{
                services.map(service => <Service key={service.id} service={service}
                />)
            }</div>
        </div>
    );
};

export default Services;