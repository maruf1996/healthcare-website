import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import BannerCareearPage from '../BannerCareearsPage/BannerCareearPage';
import CareearParagraph from '../CareearParagraph/CareearParagraph';

const Careear = () => {
    return (
        <div>
            <Header></Header>
            <BannerCareearPage></BannerCareearPage>
            <CareearParagraph></CareearParagraph>
            <Footer></Footer>
        </div>
    );
};

export default Careear;