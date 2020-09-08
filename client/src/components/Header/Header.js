import React, { useState } from "react"
import './Header.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom'

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className='navbar-container' color="light" light expand="md">
        <NavbarBrand href="/home">
          <img alt='PASS' className='navbar-brand-logo' src={process.env.PUBLIC_URL + "/images/pass-logo.jpg"} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/about'> <NavLink>About</NavLink>   </Link>
            </NavItem>
            <NavItem>
              <Link to='/training'><NavLink>Training</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to='/apparel'><NavLink>Apparel</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'><NavLink>Contact</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>

  )
}

export default Header