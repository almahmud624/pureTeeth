import React from 'react';
import './Banner.css';
import banner from '../../../Images/banner.jpg';

const Banner = () => {
    return (
        <>
            <div>
                <div className="hero py-16">
                    <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                        <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                            <div className="hero-text col-span-6 sm:order-last md:order-first md:text-left sm:text-center pt-4 lg:pt-0">
                                <h1 className="font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">A bright smile can attract positive vibes</h1>
                                <div className=" w-16 sm:border-b-0 md:border-b-2 border-green-500 mt-8" />
                                <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">Your ultimate We’re proud to offer a wide variety of services that can help you achieve all types of smiles!</p>
                            </div>
                            <div className="hero-image col-span-6 order-first sm:order-first md:order-last">
                                <img src={banner} className="rounded-sm" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Banner;