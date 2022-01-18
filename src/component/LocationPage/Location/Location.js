import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import BannerLocationPage from '../BannerLocationPage/BannerLocationPage';
import LocationDetails from '../LocationDetails/LocationDetails';

const Location = () => {
    return (
        <div>
            <Header></Header>
            <BannerLocationPage></BannerLocationPage>
            <LocationDetails></LocationDetails>
            <Footer></Footer>
        </div>
    );
};

export default Location;