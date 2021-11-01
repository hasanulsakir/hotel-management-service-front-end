import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import Sidebar from './Sidebar';
import './dashboard.css'

const Dashborad = () => {
    const { user } = useAuth();
    return (
        <div >
            
            <Container fluid>
                <Row>
                    <Col lg={3} className="ml-0">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={8} className="mt-5 dashBoradBody">
                        <div className="text-center">
                            <h1>Welcome, <span className="text-primary">{user.displayName}</span></h1>
</div>
                    </Col>
                </Row>
            </Container>
       </div>
    );
};

export default Dashborad;