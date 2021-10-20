import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../../hooks/useServices';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [services] = useServices();
    return (
        <Container id="doctors" className="py-7">
            <h1 className="my-4 text-5xl font-bold">Meet Our Specalist</h1>
            <p className="text-lg text-gray-600 mb-4">Our specalist are dedicated to improving your oral health</p>
            <Row xs sm={2} md={2} lg={3} className="doctors g-4">
                {
                    services.slice(0, 3)?.map(service => <Doctor
                        key={Math.random()}
                        service={service}
                    ></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;