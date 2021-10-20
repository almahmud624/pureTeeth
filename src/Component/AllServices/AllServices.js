import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const AllServices = () => {
    const [services] = useServices();
    return (
        <Container className="py-7 px-7">
            <h1 className="my-4 text-5xl font-bold">Our Services</h1>
            <p className="text-lg text-gray-600 mb-4 pb-4">Let your smile sparkle radiant for the special moments in life</p>
            <Row xs sm={2} md={2} lg={3} className="services g-4">
                {
                    services?.map(service => <div key={Math.random()}>
                        <Col className='flex max-w-sm w-full rounded-lg overflow-hidden mx-auto'>
                            <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 text-white">
                                <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-green-900 to-transparent"></div>
                                <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                                    <div className="align-self-end w-full">
                                        <div className="h-52"></div>
                                        <div className="space-y-6">
                                            <div className="flex flex-col space-y-2 inner">
                                                <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col"></div>
                                                <p className="text-sm text-gray-100 mb-6">
                                                    {service.shortDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="absolute inset-0 transform w-full -translate-y-4" src={service.img} style={{ filter: 'grayscale(0)' }} alt="" />
                                <div className="flex flex-row relative pb-10 space-x-4 z-10">
                                    <button
                                        className="flex items-center py-2 px-4 rounded font-semibold mx-auto transition duration-500 border-2 border-green-500 hover:bg-green-500"
                                    >
                                        <Link to={`/service-details/${service.id}`}>More details <i className="fas fa-angle-right ps-1 
                            " style={{ verticalAlign: 'middle' }}></i></Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </div>)
                }
            </Row>

        </Container>
    );
};

export default AllServices;