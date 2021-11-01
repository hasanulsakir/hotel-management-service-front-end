import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Addservice = () => {
      const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://immense-meadow-35414.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    window.alert('Data Inserted Successfully');
                    reset();
             }   
            })
  };
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
                                Add a Service
                            </h2>

                       <div className="shadow p-5  ">
                          <form className="d-flex flex-column text-center" onSubmit={handleSubmit(onSubmit)}>
                          <input className="mb-3 py-2" {...register("title", { required: true })} placeholder="Title" />
                          <input className="mb-3 py-2" {...register("description",{ required: true })} placeholder="Description"/>
                          <input className="mb-3 py-2" type="number" {...register("price",{ required: true })} placeholder="Package Price"/>
                          <input className="mb-3 py-2" type="text" {...register("img", { required: true })} placeholder="Image Url"/>
                          <input className="mb-3 py-2 btn btn-success fw-bold display-5" type="submit" />
    </form>
                          </div>
                    


                        </div>
                        </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Addservice;