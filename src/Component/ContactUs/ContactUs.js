import React from 'react';
import contactBg from '../../Images/contact-bg.jpg';

const ContactUs = () => {
    return (
        <div>
            <section className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
                style={{ background: `url(${contactBg}) no-repeat`, backgroundSize: 'cover' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex flex-col md:flex-row items-center justify-center">
                    <div className="lg:w-3/6 lg:pr-0 pr-0">
                        <h1 className="font-medium text-5xl text-white">Contact <span className="text-green-500">Pure Teeth</span></h1>
                        <p className="leading-relaxed mt-4 text-white">
                            We’re here to help and answer any question you might have. We look forward to hearing from you </p>
                    </div>
                    <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
                        <div className="relative mb-4">
                            <label for="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded-md border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded-md border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="email" id="phone" name="phone" className="w-full bg-white rounded-md border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full bg-white rounded-md border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"> </textarea>
                        </div>
                        <button className="text-white bg-green-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-green-700 transition duration-500 text-lg">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;