import React, { useState } from "react"
import styled from "styled-components"
import ChevronDownIconSVG from "../../images/chevron-down"
import linkedInIcon from "../../images/linkedIn.svg"
import { BaseMarginContainer } from "../base/base-components"
import { device, size } from "../base/device"
import { HANbody, HANsmalldescription, HANsubh3 } from "../base/fonts"
import { darkGray, teal } from "../base/colors"

//FOR ENTIRE LIST
export const OurTeamContainer = styled(BaseMarginContainer) `
    display: flex;
    flex-wrap: wrap;

`

//FOR ONE MEMBER
export const TeamMemberContainer = styled.div `
    flex-basis: 33%;
    padding: 30px;
    margin-bottom: 30px;

    @media ${device.smLaptop} {
      padding: 15px;
    }

    @media ${device.tablet} {
      padding: 10px;
    }

    @media ${device.mobile} {
      flex-basis: 50%;
    }

    @media (max-width: 350px) {
      flex-basis: 100%;
      padding: 10px;
    }
`

export const TeamMemberTitle = styled(HANsmalldescription)`
    padding-top: 10px;
    margin: 0px;
`
export const TeamMemberName = styled(HANsubh3)`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 0px;
    margin-top: 5px;
`

export const TeamMemberImage = styled.img`
    height: 350px;
    object-fit: cover;
    object-position: 50% 0%;


    @media (min-width: 1600px) {
      height: auto;
    }

    @media ${device.smLaptop} {
      height: auto;
      max-height: 500px;
    }

    @media ${device.tablet} {
      height: auto;
      max-height: 400px;
    }

    @media ${device.mobile} {
      height: auto;
      max-height: 300px;
    }



`

export const TeamMemberNameBox = styled.div`
  margin-bottom: 20px;
`

export const LinkedInImage = styled.img`
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: baseline;
`
export const AboutDescription = styled.div`
  margin-bottom: 10px; 
  padding-top: 10px;
  overflow: hidden;
  transition: all 0.3s;
  max-height: ${props => (props.isOpen ? '100%' : '0px')};

`

export const AboutControl = styled.div`
  text-align: right;
  font-family: "URW DIN", sans-serif;
  color: ${darkGray};
  text-transform: uppercase;
`

export const AboutDropdownIcon = styled.div`
  display: inline;
  width: inherit;
  vertical-align: baseline;
  margin-left: 3px;
  transition: all 0.2s;
  svg {
    vertical-align: baseline;
    transition: all 0.2s;
    transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'none')};
  }
`

export const TealBar = styled.div `
  height: 2px;
  background-color: ${teal};
  width: 100%;
`

const TeamMember = ({ teamMember }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = React.useState(false);

  return <TeamMemberContainer>
    <TeamMemberImage  alt={`${teamMember.name}, ${teamMember.title}`} 
        src={isHovered ? teamMember.alternateProfilePicture.fluid.src : teamMember.profilePicture.fluid.src}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}/>
    <TeamMemberTitle>{teamMember.title}</TeamMemberTitle>
    
    <TeamMemberNameBox>
      <TeamMemberName>{teamMember.name}</TeamMemberName>
     <a href={teamMember.linkedIn}>
       <LinkedInImage src={linkedInIcon}/>
       </a>
    </TeamMemberNameBox>

    <AboutControl isOpen={open} onClick={e => setOpen(!open)}>
      About
      {' '}
      <AboutDropdownIcon isOpen={open}>
        <ChevronDownIconSVG />
      </AboutDropdownIcon>
    </AboutControl>
    <AboutDescription isOpen={open}>
      <HANbody>{teamMember.bio}</HANbody>
    </AboutDescription>
    <TealBar/>
  </TeamMemberContainer>

}

export default TeamMember