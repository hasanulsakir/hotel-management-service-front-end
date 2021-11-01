import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';
// import ServiceList from './ServiceList';

const AllServices = () => {
   const [Services, setServices] = useState([]);
    
   useEffect(() => {
   fetch('https://immense-meadow-35414.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    
     const handleDelete = id => {
         const confirm = window.confirm('Are You Comfirm, Want To Delete?');
         if (confirm) {
             const uri = `https://immense-meadow-35414.herokuapp.com/services/${id}`
    fetch(uri, {
      method:'delete'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const availableService = Services.filter(service => service._id !== id)
            setServices(availableService);
        }
    })
         }
  }
    return (
        <div>


<Container fluid>
                <Row>
                    <Col lg={2}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={8} className=" mt-5 mb-5">
                        <div className="text-center my-3">
                            <h2 className="text-black my-5 fw-bold">
                              Manage Services
                            </h2>

                     
                    


<Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>Id</th>
      <th>Image</th>
      <th>Title</th>
      <th>Description</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
    Services.map(service =>
       <tr>
      <td>{service._id}</td>
      <td><img src={service.img} height="25px" width="25px" className="rounded-circle" alt="thumb"/></td>
            <td>{service.title.slice(0,10)}..</td>
            <td>{service.description.slice(0,20)}...</td>
            <td>$ {service.price}</td>
            <td className="d-flex align-items-center">
          <NavLink to={`/service/${service._id}`}>
             <Button className="mx-1 border-0 py-1 px-3 rounded shadow btn-secondary">Details</Button>
               </NavLink>
          <NavLink to={`/updateservice/${service._id}`}>
             <Button className="mx-1 border-0 py-1 px-3 rounded shadow btn-success"><FontAwesomeIcon  icon={faEdit} /></Button>
               </NavLink>
                <Button onClick={()=>handleDelete(service._id)}  className=" mx-1 border-0 py-1 px-3 rounded shadow btn-danger"><FontAwesomeIcon  icon={faTrashAlt} /></Button></td>
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

export default AllServices;