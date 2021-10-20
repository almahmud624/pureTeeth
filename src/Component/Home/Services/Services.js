import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices()
    return (
        <Container id="services" className="py-7">
            <h1 className="my-4 text-5xl font-bold">Our Services</h1>
            <p className="text-lg text-gray-600 mb-4 pb-4">Let your smile sparkle radiant for the special moments in life</p>
            <Row xs sm={2} md={2} lg={3} className="services g-4">
                {
                    services.slice(0, 6)?.map(service => <Service
                        key={Math.random()}
                        service={service}
                    ></Service>)
                }
            </Row>
            <button
                className="flex items-center py-2 px-4 mt-5 rounded font-semibold mx-auto transition duration-500 border-2 border-green-500 hover:bg-green-500"
            >
                <Link to='/all-services'>See all <i className="fas fa-angle-right ps-1 
                            " style={{ verticalAlign: 'middle' }}></i></Link>
            </button>
        </Container>
    );
};

export default Services;