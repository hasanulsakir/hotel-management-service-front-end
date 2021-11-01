import React from 'react';
import Aboutus from './Aboutus/Aboutus';
import Bannar from './Bannar/Bannar';
import Services from './Service/Services';

const Home = () => {
 
    return (
        <div>
          
            <Bannar></Bannar>
            <Services></Services>
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;