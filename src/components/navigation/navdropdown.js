import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray } from "../base/colors"
import { device, size } from "../base/device"
import ChevronDown from '../../images/chevron-down.svg';
import NavLink from './navigation'

export const NavWrapper = styled.div`
  @media ${device.tablet} {
    width: 50%;
    order: -1;
  }
`

export const NavDropdownIcon = styled.img`
  display: inline;
  width: inherit;
  vertical-align: baseline;
  margin-left: 3px;
  transform: ${props => (props.isOpen ? 'rotate(180deg)': 'none')};
  transition: all 0.2s;
`

export const NavMenu = styled.div`
cursor: pointer;
color: ${props => (props.isOpen ? teal : navy)};
font-family: sans-serif;
font-size: 13px;
text-transform: uppercase;
transition: all 0.2s;
:hover {
    color: ${teal};
}

@media ${device.tablet} {
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

export const DropdownListContainer = styled.div`
position: absolute;
background-color: ${lightGray};
overflow: hidden;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
transform: translate(-25px, 20px);
max-height: ${props => (props.isOpen ? '200px': '0px')};
transition: all 0.3s;

@media ${device.tablet} {
  max-height: ${ props => (props.isOpen ? '200px': '0px')};
  position: inherit;
  box-shadow: none;
  transform: none;
}
    
`

export const DropdownLink = styled(Link)`
color: ${teal};
font-family: sans-serif;
font-size: 13px;
text-transform: uppercase;
display: block;
text-align: center;
padding: 15px 20px;

:hover {
  transition: all 0.2s;
  color: ${navy};
  text-decoration: underline;
} 

@media ${device.tablet} {
  padding: 15px;
  font-size: 13px;
  margin-left: 10px;
  text-decoration: none;
  display: block;
  color: ${navy};
  text-transform: uppercase;
  padding: 15px;
  transition: all 0.2s;
  text-align: left;
  
  :hover {
    color: ${teal}
  }
}



`

const NavDropdown = ({menuName, listContents}) => {
    const node = React.useRef();
    const [open, setOpen] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleClick = e => {
        if (node.current.contains(e.target)) {
          console.log("I'm big yoshi")
          return;
        }
        setOpen(false);
    }; 

    
      React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        console.log("nein bepis!!! 3:" + width)

        if(width > size.tablet) {
        document.addEventListener("mousedown", handleClick);
        } else {
          document.removeEventListener("mousedown", handleClick);
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
            <NavDropdownIcon src={ChevronDown} isOpen={open}/>
        </NavMenu>
        <DropdownListContainer isOpen={open}>
            {listContents.map((link) => {
            return (
                <DropdownLink to={link[1]}>{link[0]}</DropdownLink>
            )})}
        </DropdownListContainer>
</NavWrapper>  
  }


export default NavDropdown