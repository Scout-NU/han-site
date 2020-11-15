import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray } from "../base/colors"
import ChevronDown from '../../images/chevron-down.svg';
import HamburgerIconPicture from "../../images/hamburger.svg"
import CloseIconPicture from "../../images/close.svg"
import { device } from "../base/device"

export const HamburgerContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index:10000;
    
`
export const HamburgerMenu = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index: 10000;
    padding-right: 30px;
`
export const MenuContentContainer = styled.div`
  display: flex;
  position:absolute;
  z-index: 9999;
  background-color: ${lightGray};
  top:0;
  right:0;
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
  z-index: 1000000;
`

export const HambLink = styled(Link)`
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

export const HambDropdownListContainer = styled.div`
  overflow: hidden;
  transition: all 0.2s;
  max-height: ${ props => (props.isOpen ? '300px': '0px')};
  
`

export const HambDropdownLink = styled(HambLink)`
    color: ${teal};
    font-size: 13px;
    margin-left: 10px;
    :hover {
        color: ${navy}
    }
`
//REFACTOR -> SAME AS NAVDROPDOWN
export const HambDropdownIcon = styled.img`
  display: inline;
  width: inherit;
  vertical-align: baseline;
  margin-left: 3px;
  transform: ${props => (props.isOpen ? 'rotate(180deg)': 'none')};
  transition: all 0.2s;
`

export const HambDropdownMenuLink = styled(HambLink)`
  color: ${props => (props.isOpen ? teal : navy)};
`


const HambDropdown = ({menuName, listContents}) => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    return <div onClick={toggle}>
                <HambDropdownMenuLink isOpen={open}>
                    {menuName}
                    {' '}
                    <HambDropdownIcon src={ChevronDown} isOpen={open}/>
                </HambDropdownMenuLink>
                <HambDropdownListContainer isOpen={open}>
                    {listContents.map((link) => {
                    return (
                        <HambDropdownLink to={link[1]}>{link[0]}</HambDropdownLink>
                    )})}
                </HambDropdownListContainer>
            </div>  
}

const Hamburger = () => {
    const [open, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!open);
    return <HamburgerContainer>
        <HamburgerMenu>
            <HamburgerIcon src={HamburgerIconPicture} onClick={toggle}/>
        </HamburgerMenu>
            <MenuContentContainer isOpen={open}>
            <HamburgerIcon src={CloseIconPicture} style={{position: "absolute", right: "30px", top: "15px"}} onClick={toggle}/>
                <MenuContentColumn>
                    <HambDropdown menuName="Involved"
                      listContents={[["Overview", "/get-involved"], 
                      ["Ventures", "/get-involved/for-ventures"], 
                      ["Investors", "/get-involved/for-investors"], 
                      ["Students", "/get-involved/for-students"]]}/>
                    <HambLink to="/explore">Explore</HambLink>
                    <HambLink to="/contact">Contact</HambLink>
                </MenuContentColumn>
                <MenuContentColumn>
                    <HambDropdown menuName="People" 
                      listContents={[["Our Team", "/people/our-team"], 
                      ["Alumni", "/people/alumni"], 
                      ["Advisors", "/people/advisors"]]}/>
                    <HambLink to="/portfolio">Portfolio</HambLink>
                    <HambLink to="/faq">FAQ</HambLink>
                </MenuContentColumn>
            </MenuContentContainer>
    </HamburgerContainer>  
}


export default Hamburger