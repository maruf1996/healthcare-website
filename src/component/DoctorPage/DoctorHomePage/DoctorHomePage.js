import React from 'react';
import Banner from '../BannerDoctorPage/BannerDoctorPage';
import Doctors from '../Doctors/Doctors';
import Paragraph from '../Paragraph/Paragraph';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const DoctorHomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Paragraph></Paragraph>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default DoctorHomePage;