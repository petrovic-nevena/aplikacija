import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElementi';

const Navbar = () => {
    return (
        <Nav>
        <NavLink to='/'>
          <h1>Yamifood</h1>
        </NavLink>
        <Bars />        
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Pocetna
          </NavLink>          
          <NavLink to='/contact' activeStyle>
            Kontakt
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    )
}

export default Navbar
