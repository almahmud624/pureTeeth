import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../Images/about-bg.png';

const AboutUs = () => {
    return (
        <Container>
            <Row xs={1} sm={1} md={1} lg={2} className="justify-center items-center my-7">
                <Col className="sm:order-last md:order-first md:text-left sm:text-center pt-4 lg:pt-0">
                    <h4 className="text-2xl font-semibold text-green-500">About Us</h4>
                    <h2 className="text-5xl font-bold my-3">We help dental professionals do more, virtually</h2>
                    <p className=" text-md">In 2014, we started DentalMonitoring with the vision to help the dental industry automate and virtualize everything outside of the clinical side of care.</p>
                </Col>
                <Col className="order-first sm:order-first md:order-last">
                    <img src={aboutImg} alt="" />
                </Col>
            </Row>
            <div className="my-7 pt-7 md:text-left sm:text-center">
                <h2 className="text-5xl font-bold my-3">Our Mission</h2>
                <p className="lg:w-2/4 text-md">In 2014, we started DentalMonitoring with the vision to help the dental industry automate and virtualize everything outside of the clinical side of care.</p>
            </div>
            <div className="flex items-center justify-start md:px-5 sm:px-2 py-5 mb-5">
                <div className="w-full rounded-lg bg-white md:px-5 sm:px-2 px-4 pt-4 shadow pb-10 text-gray-800">
                    <div className="w-full pt-1 pb-2">
                        <div className="overflow-hidden rounded-full w-20 h-20 mx-auto">
                            <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-full mb-10">
                        <div className="sm:text-4xl md:text-6xl lg:text-8xl text-green-500 text-left leading-tight h-3">“</div>
                        <p className="sm:text-xl md:text-2xl lg:text-3xl text-gray-600 text-center font-light md:px-10 sm:px-2">We believe that dentists and orthodontists should be able to automate and virtualize everything outside of the clinical side of care — and at the same time create a more connected and convenient patient experience. We hope to make this a reality through trusted partnerships with industry leaders.</p>
                        <div className="sm:text-4xl md:text-6xl lg:text-8xl text-green-500 text-right leading-tight h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full">
                        <p className="text-xl text-green-500 font-bold text-center">Philippe Salah, CEO</p>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default AboutUs;