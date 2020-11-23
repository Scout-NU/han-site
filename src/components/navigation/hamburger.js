import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray } from "../base/colors"
import ChevronDown from '../../images/chevron-down.svg';
import HamburgerIconPicture from "../../images/hamburger.svg"
import CloseIconPicture from "../../images/close.svg"
import { device } from "../base/device"
import { OUR_TEAM_LINKS, GET_INVOLVED_LINKS } from "./links"

export const HamburgerMenu = styled.div`
    cursor: pointer;
    padding-right: 30px;
`
export const MenuContentContainer = styled.div`
  display: flex;
  position:absolute;
  background-color: ${lightGray};
  top: 0;
  right: 0;
  width: 45%;
  justify-content: center;
  transition: all 0.2s;
  max-height: ${ props => (props.isOpen ? '500px': '0px')};
  padding: ${ props => (props.isOpen ? '60px 10px': '0px 10px')};
  overflow: hidden;

  @media ${device.mobile} {
    width: 100%;
  }
`

export const MenuContentColumn = styled.div`
  width: inherit;
`

export const HamburgerIcon = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
`

export const HamburgerLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${navy};
  text-transform: uppercase;
  padding: 15px;
  transition: all 0.2s;
  
  :hover {
    color: ${teal}
  }
`

export const HamburgerDropdownListContainer = styled.div`
  overflow: hidden;
  transition: all 0.2s;
  max-height: ${ props => (props.isOpen ? '300px': '0px')};
  
`

export const HamburgerDropdownLink = styled(HamburgerLink)`
    color: ${teal};
    font-size: 13px;
    margin-left: 10px;
    :hover {
        color: ${navy}
    }
`

export const HamburgerDropdownIcon = styled.img`
  display: inline;
  width: inherit;
  vertical-align: baseline;
  margin-left: 3px;
  transform: ${props => (props.isOpen ? 'rotate(180deg)': 'none')};
  transition: all 0.2s;
`

export const HamburgerDropdownMenuLink = styled(HamburgerLink)`
  color: ${props => (props.isOpen ? teal : navy)};
`


const HamburgerDropdown = ({menuName, listContents}) => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    return <div onClick={toggle}>
                <HamburgerDropdownMenuLink isOpen={open}>
                    {menuName}
                    <HamburgerDropdownIcon src={ChevronDown} isOpen={open}/>
                </HamburgerDropdownMenuLink>
                <HamburgerDropdownListContainer isOpen={open}>
                    {listContents.map((link) => {
                    return (
                        <HamburgerDropdownLink to={link[1]}>{link[0]}</HamburgerDropdownLink>
                    )})}
                </HamburgerDropdownListContainer>
            </div>  
}

const Hamburger = () => {
    const [open, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!open);
    return <>
        <HamburgerMenu>
            <HamburgerIcon src={HamburgerIconPicture} onClick={toggle}/>
        </HamburgerMenu>
            <MenuContentContainer isOpen={open}>
            <HamburgerIcon src={CloseIconPicture} style={{position: "absolute", right: "30px", top: "15px"}} onClick={toggle}/>
                <MenuContentColumn>
                    <HamburgerDropdown menuName="Involved"
                      listContents={GET_INVOLVED_LINKS}/>
                    <HamburgerLink to="/explore">Explore</HamburgerLink>
                    <HamburgerLink to="/contact">Contact</HamburgerLink>
                </MenuContentColumn>
                <MenuContentColumn>
                    <HamburgerDropdown menuName="People" 
                      listContents={OUR_TEAM_LINKS}/>
                    <HamburgerLink to="/portfolio">Portfolio</HamburgerLink>
                    <HamburgerLink to="/faq">FAQ</HamburgerLink>
                </MenuContentColumn>
            </MenuContentContainer>
    </>  
}


export default Hamburger