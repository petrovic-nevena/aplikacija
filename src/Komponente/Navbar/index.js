import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu    
  } from './NavbarElementi';

const Navbar = () => {
    return (
        <Nav>
        <NavLink to='/'>
          <h2>Yamifood</h2>
        </NavLink>
        <Bars />        
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Početna
          </NavLink>          
          <NavLink to='/contact' activeStyle>
            Kontakt
          </NavLink>                    
        </NavMenu>        
      </Nav>
    )
}

export default Navbar
