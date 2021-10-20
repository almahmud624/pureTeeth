import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Pure <span className="text-green-500">Teeth</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavHashLink} className="text-green-500 font-medium transform hover:scale-90 hover:text-green-500 transition duration-500" to="/home" activeStyle={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-green-500 font-medium transform hover:scale-90 hover:text-green-500 transition duration-500" to="/home#services" activeStyle={{ color: 'white' }}>Services</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-green-500 font-medium transform hover:scale-90 hover:text-green-500 transition duration-500" to="/home#blogs" activeStyle={{ color: 'white' }}>Blog</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-green-500 font-medium transform hover:scale-90 hover:text-green-500 transition duration-500" to="/contact" activeStyle={{ color: 'white' }}>Contact</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-green-500 font-medium transform hover:scale-90 hover:text-green-500 transition duration-500" to="/about" activeStyle={{ color: 'white' }}>About</Nav.Link>
                        {user?.email ? <Nav.Link><Button onClick={logOut} className="border-0 bg-green-500 font-medium hover:bg-green-700 transition duration-500">Logout</Button></Nav.Link> : <Nav.Link as={NavHashLink} to="/login" className="text-green-500 font-medium transform hover:scale-90 hover:text-green-500 transition duration-500" activeStyle={{ color: 'white' }}>Account</Nav.Link>}
                        <Navbar.Text className="text-green-400 font-medium">
                            {user?.email && 'Signed in as:'} <Link to="/login" className="text-green-500 font-medium">{user?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;