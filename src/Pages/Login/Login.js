
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { error, signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
            
           history.push(redirect_url)
            })
    }
    const handleGithubSignin = () => {
        signInUsingGithub()
         .then(result => {
           history.push(redirect_url)
            })
    }
    return (
        <div>
            <div className="p-5 my-5 w-75 mx-auto bg-light shadow">
                <h2 className="mt-3">Login</h2>
                <div className="p-5">
                    <Button disabled className="rounded py-2 mb-2 btn btn-success shadow px-5"><FontAwesomeIcon icon={faEnvelope}/> Login With Email</Button>
                    <br/>
                    <Button disabled className="rounded py-2 mb-2 btn btn-primary shadow px-5"><FontAwesomeIcon icon={faPhoneAlt}/> Login With Phone</Button>
                   <br/>
                    <Button onClick={handleGoogleSignin} className="rounded mb-2 py-2 btn btn-danger shadow px-5"><FontAwesomeIcon icon={faGoogle}/> Login With GOOGLE</Button>
                    <br/>
                    <Button onClick={handleGithubSignin} className="rounded py-2 btn btn-dark shadow px-5"><FontAwesomeIcon icon={faGithub}/> Login With GITHUB</Button>
                    <p className="text-danger mt-5 fw-bold">{error}</p>
                </div>
              
            </div>
        </div>
    );
};

export default Login;