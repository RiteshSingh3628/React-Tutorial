import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CommonContext from '../context/CommonContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


function NavBar() {
  const {theme,setTheme} = useContext(CommonContext)

  function themeToggle(newTheme){
    setTheme(theme=='light'?'dark':'light' )
  }

  return (
    <Navbar expand="lg"className= {`bg-${theme} text-${theme==='light'?'dark':'light'}` }>
      <Container   >
        <Navbar.Brand>Tutorial</Navbar.Brand>
        <button  onClick ={themeToggle} >{theme=='light'?'dark':'light'}</button>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-links' to="/contact">ContactUs</NavLink>
            <NavLink className='nav-links' to="/">Home</NavLink>
            <NavLink className='nav-links' to="/users">Users</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar