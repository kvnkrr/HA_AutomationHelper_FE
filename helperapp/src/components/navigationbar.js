import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
 

export const Navigationbar= () =>{
    return ( 
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Toggle arai-controls="navbarScroll" data-bs-target="#navbarScroll" /> 
          <Navbar.Collapse id="navbarScroll">
           <Nav>
              <NavLink eventKey="1" as={Link} to="/"> Home </NavLink>
              <NavLink eventKey="2" as={Link} to="/refuge"> Refuge </NavLink>
            </Nav>
          </Navbar.Collapse> 
        </Navbar> 
    );
  }