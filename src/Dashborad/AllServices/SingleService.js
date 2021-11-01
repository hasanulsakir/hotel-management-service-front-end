import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleService = () => {

 const { user } = useAuth();
     const [Services, setServices] = useState([]);
    
   useEffect(() => {
   fetch('https://immense-meadow-35414.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data.slice(0,8)));
    }, []);
    
    const handleOrder = ()=> {
      
        const data = (service);
        data.email = user.email;
        data.status = 'Pending';
    console.log(user.email);
         axios.post('https://immense-meadow-35414.herokuapp.com/order', data)
             .then(res => {
                 console.log(res);
                 if (res.data.insertedId) {
                     window.alert('Order Successfully');
                 }
             })
       
    }


    const { ID } = useParams();
    const [service, setService] = useState({});
    const url = `https://immense-meadow-35414.herokuapp.com/services/${ID}`;
  useEffect(() => {
   fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div>
            <img src={service.img}  height="50%" width="100%" alt="service Img"/>
            <div className="navBg py-5">
                <h2 className="py-3 fw-bold fs-3"> {service.title}</h2>
                <p className="w-75 mx-auto text-start fs-5">{service.description}</p>
                <p className="w-75 mx-auto text-center fs-2 fw-bold">$ {service.price}</p>
                 <Button className="btn rounded px-3 py-1 btn-light fs-3 fw-bold text-blue" variant="primary" onClick={handleOrder}>Book Now</Button>
           </div>
        </div>
    );
};

export default SingleService;