import React from 'react'
// import {Navbar as BootstrapNavbar} can't have same names, either use alias like this or rename the component
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
    <Navbar bg='light' expand='sm'>
      <Navbar.Brand as={Link} to='/'>
        Simply Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user'>
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
