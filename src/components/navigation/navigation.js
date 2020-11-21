import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import styled from "styled-components"
import { teal, navy, white, black, darkGray, lightGray } from "../base/colors"
import Hamburger from "./hamburger"
import NavDropdown from "./navdropdown"
import { device } from "../base/device"
import { OUR_TEAM_LINKS, GET_INVOLVED_LINKS } from "./links"
import { MAX_Z_VALUE } from "../base/constants"
import HamburgerIconPicture from "../../images/hamburger.svg"
import CloseIconPicture from "../../images/close.svg"


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
  z-index: ${MAX_Z_VALUE};
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


export const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-right: 50px;
  @media ${device.tablet} {
      margin-right: 0px;
      position: absolute;
      background-color: ${teal};
      top: 0;
      right: 0;
      width: 45%;
      justify-content: center;
      transition: all 0.2s;
      max-height: ${ props => (props.isOpen ? '500px': '0px')};
      padding: ${ props => (props.isOpen ? '60px 40px': '0px 40px')};
      overflow: hidden;
      flex-wrap: wrap;
      align-items: flex-start;
  }

  @media ${device.mobile} {
    width: 100%;
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

  @media ${device.tablet} {
    width: 50%;
    text-decoration: none;
    display: block;
    color: ${white};
    text-transform: uppercase;
    padding: 15px;
    font-size: 15px;
    transition: all 0.2s;
    
    :hover {
      color: ${teal}
    }
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

  @media ${device.mobile} {
    display: none;
 }

`

export const HamburgerIcon = styled.img`
    width: 30px;
    height: 30px;
    display: inline;

`

export const HamburgerMenu = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    cursor: pointer;
    padding-right: 30px;
  }
  z-index: ${MAX_Z_VALUE};

`

const Navigation = () => {
  const [open, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!open);

  return <NavWrapper>
      <NavBrandWrapper to="/">
          <NavLogo src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" />
          {' '}
          <NavBrand>Huntington Angels Network</NavBrand>
      </NavBrandWrapper>
      <NavLinkGroup isOpen={open}>
        <NavDropdown menuName="Involved"
                      listContents={GET_INVOLVED_LINKS}/>
         <NavLink to="/explore">Explore</NavLink>
        <NavDropdown menuName="People" 
                      listContents={OUR_TEAM_LINKS}/>
         <NavLink to="/portfolio">Portfolio</NavLink>
         <NavLink to="/faq">FAQ</NavLink>
         <NavLink to="/contact">Contact</NavLink>
      </NavLinkGroup>
      <HamburgerMenu>
          {open ? <HamburgerIcon src={CloseIconPicture} onClick={toggle}/> 
          : <HamburgerIcon src={HamburgerIconPicture} onClick={toggle}/>
          }    
       </HamburgerMenu>
    </NavWrapper>
}

export default Navigation