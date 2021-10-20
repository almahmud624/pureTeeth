import React from 'react';
import { Col } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { blogName, img, description } = blog;
    return (
        <div>
            <Col className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border-b-4 border-green-500 hover:shadow-lg transition duration-500 rounded-lg mb-5">
                    <a href="/">
                        <img className="rounded-t-lg" src={img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{blogName}</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3">{description.slice(0, 130)}...</p>
                        <a className="text-green-500 hover:text-green-600 transition duration-500 font-semibold text-md text-center inline-flex items-center" href="/">
                            Read more <i className="fas fa-angle-right ps-2 
                            " style={{ verticalAlign: 'middle' }}></i>
                        </a>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Blog;