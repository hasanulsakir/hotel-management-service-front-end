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
                                Greensborough Road Surgery has been servicing the local community since 1985.  Watsonia Road Medical Centre, a new purpose-built clinic opened in 2019 to cater for the growing needs of our patients.  The doctors from both clinics have always endeavoured to provide the highest quality of service with professionalism and compassion.  With the wide range of special areas of interest, expertise and skills among the medical staff at the two clinics, you will find all your healthcare needs will be well managed.  All the staff believe in holistic management of each individual, encompassing mental, physical and emotional health. 
                            </p>
                        </Col>
  </Row>
  </Container>
            </div>
        </div>
    );
};

export default Aboutus;