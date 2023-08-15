import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

const Header = () => {
    return (
        <>

    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
      <Link to="/" className='logo'>
        <a className='text-danger a'>
        <i className='fab fa-edge-legacy'></i>
        CHO</a>
      </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
                <Link to="/">
                 <a  className='nav-link '>
                    Home
                 </a>
                </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/about">
                   <a className='nav-link'>
                   About
                   </a>
                </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/services">
                   <a  className='nav-link'>
                    Services
                   </a>
                </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/contact">
                    <a className='nav-link'>
                        Contact
                    </a>
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}


export default Header