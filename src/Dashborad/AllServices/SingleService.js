import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
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
            <img src={service.img} height="80%" width="100%" alt="service Img"/>
            <h2>This Is {service.title}</h2>
        </div>
    );
};

export default SingleService;