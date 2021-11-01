import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutUs from '../../../images/aboutus/about.jpg';
const Aboutus = () => {
    return (
        <div className="my-5">
            <h2 className="d-2 fw-bold mt-2">About US</h2>
            <div>
                <Container>
  <Row>
                        <Col lg={6} md={6} xs={12} className="mt-5 ">
                            <img
                                src={aboutUs}
                                class="rounded mx-auto d-block shadow-lg"
                                alt="About Us" width="100%" />
                            
                        </Col>
                        <Col lg={6} md={6} xs={12} className="mt-5">
                            <p className=" px-2 mx-5 w-70 text-start fs-5 ">
                                When visiting Bangkok, you'll feel right at home at The Residence on Thonglor by Urban Hospitality, which offers quality accommodation and great service. Only 23 km away, this 4-star hotel can be easily accessed from the airport. With its convenient location, the hotel offers easy access to the city's must-see destinations.
                            </p>
                        </Col>
  </Row>
  </Container>
            </div>
        </div>
    );
};

export default Aboutus;