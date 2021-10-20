import React from 'react';

const Doctor = ({ service }) => {
    const { doctor, specialistIn, drImg } = service;
    return (
        <div>
            <div className="shadow-md rounded-lg flex max-w-sm w-ful overflow-hidden mx-auto cursor-pointer m-auto p-4 transition duration-500 ease-in-out transform hover:translate-y-2 hover:shadow-xl">
                <a href="/" className="w-full block h-full">
                    <img alt="" src={drImg} className="max-h-60 w-full object-cover rounded-lg" />
                    <div className="w-full">
                        <p className="text-gray-800 dark:text-white text-2xl font-bold my-2">
                            {doctor}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 font-medium text-md">
                            {specialistIn}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Doctor;