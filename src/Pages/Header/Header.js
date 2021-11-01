import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const active = {
        color: "#fff",
        borderBottom: "1px solid #fff"
    }
    return (
        <>
  <Navbar collapseOnSelect expand="lg" className="navBg" sticky="top" variant="dark">
    <Container>
    <Navbar.Brand as={NavLink} to="/">Homes</Navbar.Brand>
     <Navbar.Toggle/>
     <Navbar.Collapse className="justify-content-end">
       <Nav.Link as={NavLink} to="/home" activeStyle={active} className="navMenu">  Home
      </Nav.Link>
       <Nav.Link as={NavLink} to="/service" className="navMenu" activeStyle={active}>  All Service
      </Nav.Link>
       <Nav.Link as={NavLink} to="/contact" className="navMenu" activeStyle={active}>  Contact
      </Nav.Link>
       <Nav.Link as={NavLink} to="/aboutus" className="navMenu" activeStyle={active}>  About Us
      </Nav.Link>
       {user.email&&  <Nav.Link as={NavLink} to="/dashboard" className="navMenu" activeStyle={active}>  Dashboard
      </Nav.Link>   }
      
                        
<Navbar.Text>

                            {user.email && <span> Hello, {user.displayName}                           
                            </span>}
                            {user.photoURL &&<span> <img src={user.photoURL} className=" mx-3 img-fluid rounded-circle" height="35px" width="35px" alt="thumb" />
                               
                                </span>
                            }
                            {user.email ?
                <Button className="navButton" onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt}/> Log out</Button>
                  :  <Nav.Link as={NavLink} to="/login">  <Button  className="navButton"> <FontAwesomeIcon className="mx-2" icon={faSignInAlt}></FontAwesomeIcon> Login  </Button>
                        </Nav.Link>
                  
    } 
       
      </Navbar.Text>



    </Navbar.Collapse>
    </Container>
            </Navbar>
            </>
    );
};

export default Header;