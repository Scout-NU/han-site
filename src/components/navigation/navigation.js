import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { teal, navy, white, black, darkGray, lightGray } from "../base/colors"
import NavDropdown from "./navdropdown"
import { device } from "../base/device"
import { OUR_TEAM_LINKS, GET_INVOLVED_LINKS } from "./links"
import { NAVBAR_Z_VALUE } from "../base/constants"
import HamburgerIconPicture from "../../images/hamburger.svg"
import CloseIconPicture from "../../images/close.svg"
import LogoPicture from "../../images/navbar-logo.svg"



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
  z-index: ${NAVBAR_Z_VALUE};
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
      width: 55vw;
      justify-content: left;
      transition: all 0.2s;
      max-height: ${ props => (props.isOpen ? '500px': '0px')};
      padding: ${ props => (props.isOpen ? '60px 40px': '0px 40px')};
      overflow: hidden;
      flex-wrap: wrap;
      align-items: flex-start;
      box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
  }

  @media ${device.mobile} {
    width: 100%;
    justify-content: left;
  }

  @media (max-width: 360px) {
    padding: ${ props => (props.isOpen ? '60px 20px': '0px 20px')};
  }

`

export const NavLink = styled(Link)`
  color: ${navy};
  font-family: "URW DIN", sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 700;

  text-transform: uppercase;
  :hover {
    transition: all 0.2s;
    color: ${teal};
    text-decoration: underline;
  }

  @media ${device.tablet} {
    width: 50%;
    text-decoration: none;
    display: block;
    font-weight: 600;
    color: ${white};
    text-transform: uppercase;
    padding: 15px;
    font-size: 15px;
    transition: all 0.2s;
    
    :hover {
      text-decoration: underline;
      color: ${white}
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
  font-family: "URW DIN", sans-serif;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 20px;
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
  z-index: ${NAVBAR_Z_VALUE};

`


const Navigation = () => {
  const [open, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!open);

  return <NavWrapper>
      <NavBrandWrapper to="/">
          <NavLogo src={LogoPicture} />
          {' '}
          <NavBrand>Huntington Angels Network</NavBrand>
      </NavBrandWrapper>
      <NavLinkGroup isOpen={open}>
        <NavDropdown menuName="Involved"
                      listContents={GET_INVOLVED_LINKS}/>
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