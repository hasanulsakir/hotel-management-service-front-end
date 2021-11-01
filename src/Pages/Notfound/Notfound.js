import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
       <div className="bodyheight d-block mb-5 mt-5">
            <div className="d-flex flex-column align-content-center align-items-center">
                 <p className="text-center text-blue fw-bold fs-1 mt-5">This Page You Want, <span className="text-danger">Doesn't Exist</span></p>
                <NavLink to='/home'>  <Button className="border-0 navBg fs-5 rounded-2 text-white py-3 px-5">Back Home <FontAwesomeIcon icon={faHome}/></Button></NavLink>
           </div>
        </div>
    );
};

export default Notfound;