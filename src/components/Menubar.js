import React, { Component } from 'react'
import { NavLink } from'react-router-dom'
import { Container,Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Home from './Home';
import About from './About';
import StudentList from './StudentList';




export default class Menubar extends Component {
  render() {
    return (
      <Navbar className='bg-warning shadow-sm mb-3' sticky='top' expand="lg">
        <Container>
            <Navbar.Brand href='/'>
            <img 
            alt="logopetbyyuki" 
            src="\images\logopet.png"
            className='App-logo img-fluid'/>{' '}
                    My Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink to='/about' className='nav-link'>About</NavLink>
                        </li>
                    </ul>
                    <NavDropdown title="Manage Student" id="besic-nav">
                        <NavDropdown.Item >
                            <NavLink to='/create-student' className='nav-link'>Create Student</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <NavLink to='/student-list' className='nav-link'>StudentList</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Navbar.Text>
                        Sign in as : Gatesuda
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
