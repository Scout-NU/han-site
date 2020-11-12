import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray } from "../base/colors"
import ChevronDown from '../../images/chevron-down.svg';

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

// export const MenuContainer = styled.div`
//   display: none;
//   height: 100%;
//   @media (max-width: 975px) {
//     display: flex;
//   }
// `


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

  @media (max-width: 680px) {
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
    text-decoration: none;
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

export const HambMenu = styled(HambLink)`
`


const HambDropdown = ({menuName, listContents}) => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    return <div onClick={toggle}>
                <HambMenu>
                    {menuName}
                    {' '}
                    <HambDropdownIcon src={ChevronDown} isOpen={open}/>
                </HambMenu>
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
            <HamburgerIcon onClick={toggle}/>
        </HamburgerMenu>
        {/* <MenuContainer isOpen={open}> */}
            {/* <HamburgerMenu>
                <HamburgerIcon style={{position: "absolute", transform: "translate(0px, -30px)"}} onClick={toggle}/>
            </HamburgerMenu> */}
            <MenuContentContainer isOpen={open}>
            <HamburgerIcon style={{position: "absolute", right: "30px", top: "15px"}} onClick={toggle}/>
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
        {/* </MenuContainer> */}
    </HamburgerContainer>  
}


export default Hamburger