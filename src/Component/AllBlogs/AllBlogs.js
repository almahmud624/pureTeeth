import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';

const AllBlogs = () => {
    const [blogs] = useBlogs();
    return (
        <Container className="py-7">
            <h1 className="my-4 text-5xl font-bold">Read Our Latest Articles</h1>
            <p className="text-lg text-gray-600 mb-4 pb-4">Stay Updated with Our Latest News and Blog</p>
            <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
                {
                    blogs.slice(0, 1)?.map(blog1 => <div key={Math.random()} className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
                        <img src={blog1.img} className="rounded-md object-cover w-full h-64" alt="" />
                        <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                            {blog1.blogName}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            {blog1.description}
                        </p>
                        <Link to="/all-blogs" className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
                            Read more
                        </Link>
                    </div>)
                }


                <div className="w-full md:w-4/7">
                    {
                        blogs.slice(1, 6)?.map(anotherBlog => <div key={Math.random()} className="rounded w-full flex flex-col md:flex-row mb-10">
                            <img src={anotherBlog.img} className="block lg:block rounded-md sm:h-full lg:h-64 md:h-40 mb-2 md:m-0" alt="" />
                            <div className="bg-white rounded lg:px-4 md:pl-7 sm:px-0 md:pt-0 sm:pt-3">
                                <div className="md:mt-0 text-left text-gray-800 font-semibold text-xl mb-2">
                                    {anotherBlog.blogName}
                                </div>
                                <p className="block text-left p-2 ps-0 pt-1 text-sm text-gray-900 lg:2/4 md:w-2/3">
                                    {anotherBlog.description}
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </Container >
    );
};

export default AllBlogs;