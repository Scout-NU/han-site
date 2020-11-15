import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import styled from "styled-components"
import { teal, navy, white, black, darkGray } from "../base/colors"
import Hamburger from "./hamburger"
import NavDropdown from "./navdropdown"


export const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom:15px;
  align-items: center;
  height: auto;
  background-color: ${white};
  box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
  z-index: 9999;
  width: 100%;
  top: 0;
`

export const NavBrandWrapper = styled(Link)`
  margin-left: 50px;

  @media (max-width: 680px) {
     margin-left: 30px;
  }

  :hover { 
    text-decoration: none;
  }
`

export const HamburgerMenuContainer = styled.div`
  display: none;
  @media (max-width: 975px) {
    display: flex;
  }
  
`


export const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-right: 50px;
  @media (max-width: 975px) {
    display: none
  }

`

export const NavLink = styled(Link)`
  color: ${teal};
  font-family: sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  :hover {
    transition: all 0.2s;
    color: ${navy};
    text-decoration: none;
  }
`

export const NavLogo = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
`

export const NavBrand = styled.span`
  color: ${navy};
  font-family: sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  font-size: 16px;
  vertical-align: middle;

  @media (max-width: 680px) {
    display: none;
 }

`


export default () => (
    <NavWrapper>
      <NavBrandWrapper to="/">
          <NavLogo src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" />
          {' '}
          <NavBrand>Huntington Angels Network</NavBrand>
      </NavBrandWrapper>
      <HamburgerMenuContainer>
        {<Hamburger/>}
      </HamburgerMenuContainer>
      <NavLinkGroup>
        {<NavDropdown menuName="Involved"
                      listContents={[["Overview", "/get-involved"], 
                      ["Ventures", "/get-involved/for-ventures"], 
                      ["Investors", "/get-involved/for-investors"], 
                      ["Students", "/get-involved/for-students"]]}/>}
         <NavLink to="/explore">Explore</NavLink>
        {<NavDropdown menuName="People" 
                      listContents={[["Our Team", "/people/our-team"], 
                      ["Alumni", "/people/alumni"], 
                      ["Advisors", "/people/advisors"]]}/>}
         <NavLink to="/portfolio">Portfolio</NavLink>
         <NavLink to="/faq">FAQ</NavLink>
         <NavLink to="/contact">Contact</NavLink>
      </NavLinkGroup>
    </NavWrapper>
)