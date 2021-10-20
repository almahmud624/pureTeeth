import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';
import teethImg from '../../Images/tooth.png';

const ServiceDetails = () => {
    const { user } = useAuth()
    const { serviceId } = useParams();
    const [services] = useServices();
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        const foundService = services?.find(service => service.id === Number(serviceId));
        setSingleService(foundService)
    }, [services]);
    return (
        <div>
            <section className="relative py-12 bg-blueGray-50">
                <div className="items-center">
                    <div className="w-full md:w-3/5 ml-auto mr-auto px-4">
                        <img alt="..." className="max-w-full rounded-lg inline-block" src={singleService?.img} />
                    </div>
                    <div className="w-full md:w-2/3 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-green-500 mt-8">
                                <img src={teethImg} alt="" />
                            </div>
                            <h3 className="text-3xl font-semibold">{singleService?.name}</h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                {singleService?.LongDescription}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/4 ml-auto mr-auto px-4 mt-7">
                        <div className="md:pr-12">
                            <h4 className="text-2xl font-semibold">Overall Information About this Service</h4>
                            <div className="grid grid-cols-2 gap-2 py-4">
                                <div className="border-1 text-left border-green-500 rounded p-3"><p><span className="font-semibold">Service Name:</span> {singleService?.name}</p></div>
                                <div className="border-1 text-left border-green-500 rounded p-3"><p><span className="font-semibold">Doctor:</span> {singleService?.doctor}</p></div>
                                <div className="border-1 text-left border-green-500 rounded p-3"><p><span className="font-semibold">Cost:</span> ${singleService?.cost}</p></div>
                            </div>
                        </div>
                    </div>
                    <Link to='/services' className="bg-green-500 hover:bg-green-700 transition duration-500 text-white rounded py-2 px-4 font-semibold mt-3 inline-block">Book Appointment</Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;