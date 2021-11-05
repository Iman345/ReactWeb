import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to="/home" activeStyle>
          Iman's Corner
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/creative' activeStyle>
            Creative
          </NavLink>
          <NavLink to='/theory' activeStyle>
           Theory
          </NavLink>
         
        
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/art'>Art</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
