import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"
import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CONTACTY</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
         
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation