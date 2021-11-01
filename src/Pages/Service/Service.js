import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Service = () => {
    
    const { user } = useAuth();
     const [Services, setServices] = useState([]);
    
   useEffect(() => {
   fetch('https://immense-meadow-35414.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    
    const handleOrder = (i) => {
      
        const data = (Services[i]);
        data.email = user.email;
        data.status = 'Pending';
    
        
        {
            user.email ?
                
                 axios.post('https://immense-meadow-35414.herokuapp.com/order', data)
                    .then(res => {
                      
                            if (res.data.insertedId) {
                                window.alert('Order Successfully');
                            }
                       
                    }) 
             
                
        :window.alert('Login First');  
        }
    }
    return (
        <div>
        <h2 className="my-5 fw-bold ">Service</h2>
            <div>
                <Container fluid>
              <Row xs={1} md={4} >



            {
                            Services.map((service,index) => 
                    <Col className="p-3">
        <div className="rounded-5 border-0 shadow">
     <Card >
  <Card.Img variant="top" height="200px" src={service.img} />
  <Card.Body>
    <Card.Title className="fw-bold">{service.title.slice(0,20)}..</Card.Title>
    <Card.Text className=" mx-auto  ">
      {service.description.slice(0,70)}..
    </Card.Text>
    <Card.Text className="fw-bold text-blue display-6">
     $ {service.price}
                                      </Card.Text>
                                      <NavLink to={`/service/${service._id}`}>
             <Button  className="btn rounded px-3 py-1 bg-secondary fw-bold text-light mx-1" >Details</Button>
               </NavLink>
    <Button className="btn rounded px-3 py-1 navBg fw-bold text-light" variant="primary" onClick={()=>handleOrder(index)}>Order Now</Button>
  </Card.Body>
</Card>
            </div>
            </Col>
                                )
                }
                   

</Row>
</Container>
            </div>
        </div>
    );
};

export default Service;