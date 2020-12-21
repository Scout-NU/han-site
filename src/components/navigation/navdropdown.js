import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device, size } from "../base/device"
import ChevronDown from '../../images/chevron-down.svg';
import NavLink from './navigation'
import ChevronDownIconSVG from '../../images/chevron-down'

export const NavWrapper = styled.div`
  @media ${device.tablet} {
    width: 50%;
    order: -1;
  }
`

export const NavDropdownIcon = styled.div`
  display: inline;
  width: inherit;
  vertical-align: baseline;
  margin-left: 3px;
  transition: all 0.2s;
  svg {
    vertical-align: baseline;
    transition: all 0.2s;
    transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'none')};
    path {
      @media ${device.tablet} {
        fill: ${yellow};
        stroke: ${yellow};
      }
    }
  }


`

export const NavMenu = styled.div`
cursor: pointer;
color: ${props => (props.isOpen ? teal : navy)};
font-family: "URW DIN", sans-serif;
font-size: 14px;
letter-spacing: 2px;
font-weight: 700;
text-transform: uppercase;
transition: all 0.2s;
:hover {
    color: ${teal};
}

@media ${device.tablet} {
  text-decoration: none;
  display: block;
  color: ${white};
  text-transform: uppercase;
  font-weight: 600;
  padding: 15px;
  font-size: 15px;
  transition: all 0.2s;
  
  :hover {
    color: ${white}
  }

`

export const DropdownListContainer = styled.div`
position: absolute;
background-color: ${lightGray};
overflow: hidden;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
transform: translate(-27px, 20px);
max-height: ${props => (props.isOpen ? '200px' : '0px')};
transition: all 0.3s;

@media ${device.tablet} {
  max-height: ${props => (props.isOpen ? '200px' : '0px')};
  position: inherit;
  box-shadow: none;
  transform: none;
  background-color: unset;
}
    
`

export const DropdownLink = styled(Link)`
color: ${navy};
font-family: "URW DIN", sans-serif;
font-size: 14px;
letter-spacing: 1px;
font-weight: 700;
text-transform: uppercase;
display: block;
text-align: center;
padding: 15px 30px;

:hover {
  transition: all 0.2s;
  color: ${teal};
  text-decoration: underline;
} 

@media ${device.tablet} {
  padding: 15px;
  margin-left: 10px;
  text-decoration: none;
  display: block;
  color: ${white};
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px;
  transition: all 0.2s;
  text-align: left;
  
  :hover {
    color: ${white}
  }
}



`

const NavDropdown = ({ menuName, listContents }) => {
  const node = React.useRef();
  const [open, setOpen] = React.useState(false);
  const windowSize = typeof window !== 'undefined' && window.innerWidth;
  const [width, setWidth] = React.useState(windowSize);
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };


  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    if (width > size.tablet) {
      document.addEventListener("mousedown", handleClick);
      setOpen(false);
    } else {
      document.removeEventListener("mousedown", handleClick);
      setOpen(false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("resize", handleWindowResize);
    }
  }, [width]);

  return <NavWrapper ref={node}>
    <NavMenu isOpen={open} onClick={e => setOpen(!open)}>
      {menuName}
      {' '}
      <NavDropdownIcon isOpen={open}>
        <ChevronDownIconSVG />
      </NavDropdownIcon>
    </NavMenu>
    <DropdownListContainer isOpen={open}>
      {listContents.map((link) => {
        return (
          <DropdownLink to={link[1]}>{link[0]}</DropdownLink>
        )
      })}
    </DropdownListContainer>
  </NavWrapper>
}


export default NavDropdown