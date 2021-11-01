import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LoginRedirect = ({ children, ...rest }) => {
     let { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" variant="danger" ></Spinner>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ?  <Redirect  to={{
              pathname: "/home",
              state: { from: location }
            }}
            ></Redirect> : 
              children}
        
        
        ></Route>
    );
};

export default LoginRedirect;