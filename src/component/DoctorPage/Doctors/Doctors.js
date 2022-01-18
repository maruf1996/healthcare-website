import React from 'react';
import doctor1 from '../../../img/doctors/doctor1.jpg';
import doctor2 from '../../../img/doctors/doctor2.jpg';
import doctor3 from '../../../img/doctors/doctor3.jpg';
import doctor4 from '../../../img/doctors/doctor4.jpg';
import doctor5 from '../../../img/doctors/doctor5.jpg';
import doctor6 from '../../../img/doctors/doctor6.jpg';
import doctor7 from '../../../img/doctors/doctor7.jpg';
import doctor8 from '../../../img/doctors/doctor8.jpg';

const Doctors = () => {
    return (
        <div className="container">

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor1} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Sepand Hokmabadi</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Hokmabadi (Dr. H.) is the founder and owner of Total Health Dental Care. He grew up in the heart of Silicon Valley and observed firsthand the developing communities of technology and entrepreneurism, surrounded by innovative and creative thinkers who not only changed how we understand technology, but also the customer experience. Dr. H. wanted a career in medicine but was also passionate about business – he wanted to create a different type of medical practice in which patients were treated holistically and humanly combining both modern technology and ancient herbalism. </p>
                </div>
            </div>
            <hr className="text-danger"/>

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor2} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Anastasia Calciano</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Calciano is one of the highly skilled dentists at our Total Health Dental Care Piedmont Office in Oakland. She specializes in oral conscious sedation, oral surgery and cosmetic dentistry. She also provides patients with the critical services they need to maintain excellent oral health.</p>
                </div>
            </div>
            <hr className="text-danger"/>

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor3} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Ashish Vashi</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. He strives to get to know his patients, not just their teeth.</p>
                </div>
            </div>
            <hr className="text-danger"/>

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor4} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Jessica Ngo</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Jessica provides outstanding dental care to patients at our Total Health Dental Care Office on Telegraph Avenue in Berkeley. From children to Cal students and adults of all ages, Dr. Jessica offers the full spectrum of dental services, including oral conscious sedation and same-day crowns, all while focusing on the holistic health of the patient.</p>
                </div>
            </div>
            <hr className="text-danger"/>

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor5} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Amanda Lavorini</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Amanda was born and raised in the San Francisco Bay Area and is a second-generation dentist. She graduated Summa Cum Laude from the University of the Pacific School of Dentistry in 2004 and was presented the Dean’s Valedictorian Award. In 2006 Dr. Amanda completed her graduate endodontic training at the University of Pennsylvania School of Dental Medicine.</p>
                </div>
            </div>
            <hr className="text-danger"/>

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor6} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Peggy Chuang</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Peggy Chuang received her Bachelors in Integrative Biology from University of California at Berkeley before receiving her Doctorate in Dental Medicine from University of Nevada at Las Vegas. She is determined to be the best clinician possible and to help her patients with the most recent advances in dentistry, and she takes pride in delivering top-quality dental care in a gentle and comfortable manner.</p>
                </div>
            </div>
            <hr className="text-danger"/>

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor7} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Patricia Walker</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Walker specializes in general dentistry at our Total Health Dental Care Pill Hill Office in Oakland. Patients love Dr. Walker because of her compassion, expertise and warm demeanor.</p>
                </div>
            </div>
            <hr className="text-danger"/>

            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={doctor8} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Dr. Ernie Lavorini</h2>
                    <p className="fs-5 mt-4 text-secondary text-start">Dr. Lavorini provides outstanding dental care to patients at our Total Health Dental Care 15th Street Office in Downtown Oakland. Dr. Lavorini graduated cum laude from the University of California at San Francisco in 1973 and has dedicated his life to ensuring that everyone receives the care they deserve. Recently he won an Alameda County Public Health Department Community Partner Award for providing dental care at no cost for the homeless.</p>
                </div>
            </div>

        </div>
    );
};

export default Doctors;