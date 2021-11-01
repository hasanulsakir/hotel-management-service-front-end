import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React,{ useEffect, useState }from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';

const ManageOrder = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://immense-meadow-35414.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrder(data));
    }, []);

  const handleDelete = id => {
         const confirm = window.confirm('Are You Comfirm, Want To Delete?');
         if (confirm) {
           const uri = `https://immense-meadow-35414.herokuapp.com/delete/${id}`
           console.log(uri, id);
    fetch(uri, {
      method:'delete'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const availableOrder = orders.filter(order => order._id !== id)
            setOrder(availableOrder);
        }
    })
         }
  }
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
                              Manage Order
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
      <th>Action</th>
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
            <td> {order.status}</td>
            <td className="d-flex align-items-center">
          
          <NavLink to={`/updateorder/${order._id}`}>
             <Button className="mx-1 border-0 py-1 px-3 rounded shadow btn-success"><FontAwesomeIcon  icon={faEdit} /></Button>
               </NavLink>
                <Button onClick={()=>handleDelete(order._id)} className=" mx-1 border-0 py-1 px-3 rounded shadow btn-danger"><FontAwesomeIcon  icon={faTrashAlt} /></Button></td>
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

export default ManageOrder;