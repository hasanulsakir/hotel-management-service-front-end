import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

const Sidebar = () => {
  const active = {
        color: "red",
        borderBottom: "0px"
    }
    return (
        <div >
            <Nav as={NavLink} activeStyle={active}  to="/dashboard" className="flex-column text-decoration-none bg-white shadow sidebarHeight">
                <Nav.Link className="text-decoration-none" as={NavLink} activeStyle={active} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link className="text-decoration-none" as={NavLink} activeStyle={active} to="/manageorder">Manage Order</Nav.Link>
  <Nav.Link className="text-decoration-none" as={NavLink} activeStyle={active}  to="/myorder">My Order</Nav.Link>
  <Nav.Link className="text-decoration-none" as={NavLink} activeStyle={active}  to="/allservices">All Services</Nav.Link>
  <Nav.Link className="text-decoration-none" as={NavLink} activeStyle={active}  to="/addservice">Add Service</Nav.Link>
  
 
</Nav>
        </div>
    );
};

export default Sidebar;