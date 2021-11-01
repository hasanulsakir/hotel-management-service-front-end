import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Sidebar from '../Sidebar';
// import { useForm } from "react-hook-form";
// import axios from 'axios';

const UpdateService = () => {
 const history = useHistory();
    const { ID } = useParams();
    const [service, setservice] = useState({});
    const url = `https://immense-meadow-35414.herokuapp.com/services/${ID}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data=>setservice(data))
    }, []);
    const handleUpdateService = e => {
        const url = `https://immense-meadow-35414.herokuapp.com/services/${ID}`
        fetch(url, {
            method: 'PUT',
            headers: {
              'content-type':  'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    window.alert('Data Updated!')
                    history.push('/allservices')
               }
            })
        e.preventDefault();
    }
    const handleTitleChange = e => {
        const updateTitle = e.target.value;
        const updateService = {title: updateTitle,description:service.description,price:service.price,img:service.img }
        setservice(updateService)
    }
    const handleDescriptionChange = e => {
             const updateDescription = e.target.value;
        const updateService = {title: service.title,description:updateDescription,price:service.price,img:service.img }
        setservice(updateService)
    }
    const handlePriceChange = e => {
          const updatePrice = e.target.value;
        const updateService = {title: service.title,description:service.description,price:updatePrice,img:service.img }
        setservice(updateService)
    }
    const handleImgUrlChange = e => {
        const updateImgUrl = e.target.value;
        const updateService = {title: service.title,description:service.description,price:service.price,img:updateImgUrl }
        setservice(updateService)
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
                          <form onSubmit={handleUpdateService} className="d-flex flex-column text-center" >
                          <input onChange={handleTitleChange} className="mb-3 py-2"  value={service.title || ''} />
                          <input onChange={handleDescriptionChange} className="mb-3 py-2" value={service.description || ''}/>
                          <input onChange={handlePriceChange} className="mb-3 py-2" type="number" value={service.price || ''}/>
                          <input onChange={handleImgUrlChange} className="mb-3 py-2" type="text" value={service.img || ''}/>
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

export default UpdateService;