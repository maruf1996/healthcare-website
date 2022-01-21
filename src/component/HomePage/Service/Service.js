import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {img,name,description,id}=props.service;
    return (
        <div className="col-md-6 my-3">
            <img src={img} alt="" className="rounded img-fluid"/>
            <h3>{name}</h3>
            <blockquote className="text-start mb-3"> {description.slice(0,290)}</blockquote>
            <Link to={`/service/${id}`}>
                <button style={{background:'#ee2c2c',border:'white',padding:'13px',color:'white', fontWeight:'500'}}>Service Details</button>
            </Link>
        </div>
    );
};

export default Service;