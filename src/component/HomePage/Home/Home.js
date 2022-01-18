import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Carusel from '../Carusel/Carusel';
import HomeLocation from '../HomeLocation/HomeLocation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Carusel></Carusel>
            <HomeLocation></HomeLocation>
            <Footer></Footer>
        </div>
    );
};

export default Home;