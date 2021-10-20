import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBlogs from '../../../hooks/useBlogs';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs] = useBlogs();
    return (
        <Container className="py-7">
            <h1 className="my-4 text-5xl font-bold">Read Our Latest Articles</h1>
            <p className="text-lg text-gray-600 mb-4 pb-4">Stay Updated with Our Latest News and Blog</p>
            <Row xs sm={2} md={2} lg={3} className="blogs g-4">
                {
                    blogs.slice(0, 3)?.map(blog =>
                        <Blog
                            key={Math.random()}
                            blog={blog}
                        ></Blog>
                    )
                }
            </Row>
            <p className="text-xl font-semibold pt-3">Insights to help you do what you do better, faster and more profitably. <Link to="/all-blogs" className="text-green-500 hover:text-green-700 transition duration-500 hover:underline">Read Full Blog</Link></p>
        </Container>
    );
};

export default Blogs;


