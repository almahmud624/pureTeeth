import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, shortDescription, img } = service;
    return (
        <div>
            <Col className='flex max-w-sm w-full rounded-lg overflow-hidden mx-auto'>
                <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 text-white">
                    <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-green-900 to-transparent"></div>
                    <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                        <div className="align-self-end w-full">
                            <div className="h-52"></div>
                            <div className="space-y-6">
                                <div className="flex flex-col space-y-2 inner">
                                    <h3 className="text-2xl font-bold text-white">{name}</h3>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col"></div>
                                    <p className="text-sm text-gray-100 mb-6">
                                        {shortDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute inset-0 transform w-full -translate-y-4" src={img} style={{ filter: 'grayscale(0)' }} alt="" />
                    <div className="flex flex-row relative pb-10 space-x-4 z-10">
                        <button
                            className="flex items-center py-2 px-4 rounded font-semibold mx-auto transition duration-500 border-2 border-green-500 hover:bg-green-500"
                        >
                            <Link to={`/service-details/${id}`}>More details <i className="fas fa-angle-right ps-1 
                            " style={{ verticalAlign: 'middle' }}></i></Link>
                        </button>
                    </div>
                </div>
            </Col>
        </div >
    );
};

export default Service;