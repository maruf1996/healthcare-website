import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../../hooks/useService';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serviceItem] = useService();
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
      const matched = serviceItem.find((item) => item.id == serviceId);
      setSelectedItem(matched);
    }, [serviceItem,serviceId]);
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-md-6 mb-5">
                    <img src={selectedItem?.img} alt="" className='rounded img-fluid'/>
                </div>
                <div className="col-md-6">
                    <h2 className='text-primary border border-info border-5 p-2 bg-light mb-3'>{selectedItem?.name}</h2>
                    <p className="mt-2" style={{textAlign:"justify",fontSize:"28px"}}>{selectedItem?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;