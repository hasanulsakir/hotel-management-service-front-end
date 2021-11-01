// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../Sidebar';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrder] = useState([]);
    const email = user.email
    const url = `https://immense-meadow-35414.herokuapp.com/order/${email}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, []);
    return (
        <div className="bodyHeight">
          
<Container fluid>
                <Row>
                    <Col lg={2}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={8} className="mt-5 mb-5">
                        <div className="text-center mt-3">
                            <h2 className="text-black fw-bold">
                              My Order
                            </h2>

                     
                    


<Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>Email</th>
      <th>Image</th>
      <th>Title</th>
      <th>Description</th>
      <th>Price</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    
    {
    orders.map(order =>
       <tr>
      <td>{order.email}</td>
      <td><img src={order.img} height="25px" width="25px" className="rounded-circle" alt="thumb"/></td>
            <td>{order.title.slice(0,10)}..</td>
            <td>{order.description.slice(0,20)}...</td>
            <td>$ {order.price}</td>
            <td>
            {order.status}
            </td>
            
        </tr>
    )}
   
  </tbody>
</Table>



                        </div>
                        </Col>
                </Row>
            </Container>


        </div>
    );
};

export default MyOrders;