import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-success p-4 ">
            <div className="my-2 mb-3">
                <Link to="/location" className="text-dark fs-4">contact us</Link>
                <br />
                <Link to="/careears" className="text-dark fs-4">join our team</Link>
            </div>
            <p className="fs-5 text-light">Total Dental Care © 2021</p>
        </div>
    );
};

export default Footer;