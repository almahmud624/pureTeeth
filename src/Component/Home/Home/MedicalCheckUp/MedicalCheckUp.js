import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MedicalCheckUp = () => {
    return (
        <Container className="py-4 pt-2">
            <Row xs={1} sm={1} md={1} lg={2} className="justify-center items-center my-7 col-span-8 md:px-10 sm:px-0 mt-14">
                <Col className="sm:order-last md:order-last lg:order-first md:text-left sm:text-center pt-4 lg:pt-0">
                    <h2 className="text-5xl font-bold my-3">Get Your Free Medical Checkup</h2>
                    <p className=" text-md">What is free health checkup?Image result for free medical check up
                        A free medical check-up is a complete body analysis of how your body is functioning. It covers essential body checks like heart health, organ functions, metabolism rate and a host of other symptoms.</p>
                    <div className="grid md:justify-start justify-center items-center">
                        <button
                            className="py-2 inline-block px-4 rounded font-semibold mt-3 transition duration-500 border-2 border-green-500 hover:bg-green-500 hover:text-black"
                        >
                            <Link to='/'>Book Appointment</Link>
                        </button>
                    </div>
                </Col>
                <Col className="order-first sm:order-first md:order-first lg:order-last col-span-4">
                    <img className="rounded-lg" src="https://image.freepik.com/free-photo/male-patient-bed-talking-nurse_23-2148981218.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default MedicalCheckUp;