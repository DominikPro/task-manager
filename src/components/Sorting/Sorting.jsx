import React from "react";
//--------------------------------------------------------------------------------------------------
import { useDispatch } from "react-redux";
import { sortTasks } from "../../duck/actions/index.js";
//--------------------------------------------------------------------------------------------------
import { Nav, Container, Navbar, Row, Col, NavDropdown } from "react-bootstrap/";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const Sorting = () => {
  const dispatch = useDispatch()
	return (
<Navbar variant="Secondary" bg="Secondary" expand="sm">
  <Container fluid>

    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Sort by"
          menuVariant="dark"
        >
          <NavDropdown.Item onClick={()=> dispatch(sortTasks("newest"))}>Newest <BsArrowUpShort/> </NavDropdown.Item>
          <NavDropdown.Item onClick={()=> dispatch(sortTasks("oldest"))}>Oldest <BsArrowDownShort/></NavDropdown.Item>
              <NavDropdown.Divider />
          <NavDropdown.Item onClick={()=> dispatch(sortTasks("shortTerm"))}>Short term<BsArrowUpShort/></NavDropdown.Item>
          <NavDropdown.Item onClick={()=> dispatch(sortTasks("longTerm"))}>Long term<BsArrowDownShort/></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
        
  </Container>
</Navbar>
	);
};

export default Sorting;
