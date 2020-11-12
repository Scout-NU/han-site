import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray } from "../base/colors"
import ChevronDown from '../../images/chevron-down.svg';


export const NavDropdownContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index:10000;
    
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
z-index: 10000; 
color: ${navy};
font-family: sans-serif;
font-size: 13px;
text-transform: uppercase;
transition: all 0.2s;
:hover {
    color: ${teal};
}
`

export const DropdownListContainer = styled.div`
position: absolute;
background-color: ${lightGray};
overflow: auto;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
transform: translate(-25px, 20px);
max-height: ${props => (props.isOpen ? '200px': '0px')};
transition: all 0.2s;
    
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
  text-decoration: none;
} 
`

const NavDropdown = ({menuName, listContents}) => {
    const node = React.useRef();
    const [open, setOpen] = React.useState(false);
    const handleClick = e => {
        if (node.current.contains(e.target)) {
          return;
        }
        setOpen(false);
      };

      React.useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    return <NavDropdownContainer ref={node}>
    <NavMenu onClick={e => setOpen(!open)}>
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
</NavDropdownContainer>  
  }


export default NavDropdown