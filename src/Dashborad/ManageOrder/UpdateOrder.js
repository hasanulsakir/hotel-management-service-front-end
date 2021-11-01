import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Sidebar from '../Sidebar';

const UpdateOrder = () => {
   const history = useHistory();
    const { ID } = useParams();
    const [order, setOrder] = useState({});
    const url = `https://immense-meadow-35414.herokuapp.com/delete/${ID}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data=>setOrder(data))
    }, []);
    const handleUpdateOrder = e => {
        const url = `https://immense-meadow-35414.herokuapp.com/order/${ID}`
        fetch(url, {
            method: 'PUT',
            headers: {
              'content-type':  'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    window.alert('Data Updated!')
                    history.push('/manageorder')
               }
            })
        e.preventDefault();
    }
    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updateOrder = {status: updateStatus }
        setOrder(updateOrder)
    }
    
    return (
        <div>
          <Container fluid>
                <Row>
                    <Col lg={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg={8} className="mt-5 mb-5">
                        <div className="text-center mt-3">
                            <h2 className="text-black fw-bold">
                               Update  Service
                            </h2>

                            <div className="shadow p-5  ">
                                {/* onSubmit={handleSubmit(onSubmit)} */}
                          <form onSubmit={handleUpdateOrder} className="d-flex flex-column text-center" >
                                    <input onChange={handleStatusChange} className="mb-3 py-2" value={order.status || ''} />
                                    
                         
                          <input className="mb-3 py-2 btn btn-success fw-bold display-5" type="submit" value="Update" />
    </form>
                          </div>
                    


                        </div>
                        </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateOrder;