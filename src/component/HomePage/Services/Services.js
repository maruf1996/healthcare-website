import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="container">
            <div className="my-4">
                <h2 className="">Our Services</h2>
                <hr className='w-25 mx-auto'/>
                <div className="row">
                {
                    services.map(service=> <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                </div>
            </div>      
        </div>
    );
};

export default Services;