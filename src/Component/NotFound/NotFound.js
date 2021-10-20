import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../../Images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="lg:h-screen py-7 w-screen flex items-center">
                <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="flex-1">
                        <div className="text-5xl font-dark hidden md:block font-bold">404</div>
                        <p
                            className="text-2xl md:text-3xl font-light leading-normal"
                        >Sorry we couldn't find this page. </p>
                        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                        <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"><Link to="/">back to homepage</Link></button>
                    </div>
                    <div className="flex-1">
                        <img src={notfoundImg} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;