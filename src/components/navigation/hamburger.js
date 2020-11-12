import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

export const HamburgerContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index:10000;
    
`
export const HamburgerMenu = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index: 10000;
    padding-top: 0;
    padding-bottom: 0;
    
    @media (min-width: 0px) {
      padding-right: 30px;
    }
  
    @media (min-width: 768px) {
        padding-right: 50px;
    }
  
    @media (min-width: 992px) {
        padding-right: 100px;
    }
`

export const MenuContainer = styled.div`
  display: none;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  @media (max-width: 975px) {
    display: flex;
  }
  
  @media (min-width: 0px) {
    padding-left: 0;
  }
  @media (min-width: 768px) {
    padding-left: 0;
  }
  @media (min-width: 992px) {
    padding-left: 0;
  }
`


export const MenuContentContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  position:absolute;
  height: 10000%;
  z-index: 9999;
  background-color: #030406;
  top:0;
  left:0;
  
`
export const HamburgerIcon = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
`

export const HambHeaderLink = styled(Link)`
  text-decoration: none;
  color: #8b8b8b;
  
  :hover {
    color: white;
  }
`

const Hamburger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return <HamburgerContainer onClick={toggle}>
        {renderStep(isOpen)}
    </HamburgerContainer>  
}

function renderStep(isOpen) {
    if (!isOpen) {
        return <HamburgerMenu>
            <HamburgerIcon/>
        </HamburgerMenu>
    } else {
        return <MenuContainer>
            <HamburgerMenu>
                <HamburgerIcon/>
            </HamburgerMenu>
            <MenuContentContainer>
                <HambHeaderLink to="/">FAQ</HambHeaderLink>
                <HambHeaderLink to="/">Portfolio</HambHeaderLink>
                <HambHeaderLink to="/">Explore</HambHeaderLink>
                <HambHeaderLink to="/">People</HambHeaderLink>
                <HambHeaderLink to="/">Involved</HambHeaderLink>
                <HambHeaderLink to="/">Contact</HambHeaderLink>
                <HambHeaderLink to="/">About</HambHeaderLink>
            </MenuContentContainer>
        </MenuContainer>
    }
}

export default Hamburger