import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../../hooks/useService';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const {serviceItem}=useService();
    const [details,setDetails]=useState({});

    useEffect(()=>{
            const matched=serviceItem.find((item)=>item.id===serviceId);
            setDetails(matched);

    },[serviceItem,serviceId])
    return (
        <div>
            <h2>Service Details: {serviceId}</h2>
            <p>Name: {details?.name}</p>
        </div>
    );
};

export default ServiceDetails;