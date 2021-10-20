import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';
import Doctors from './Doctors/Doctors';
import MedicalCheckUp from './MedicalCheckUp/MedicalCheckUp';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Blogs></Blogs>
            <MedicalCheckUp></MedicalCheckUp>
        </Container>
    );
};

export default Home;