import React, { useState } from "react"
import styled from "styled-components"
import ChevronDownIconSVG from "../../images/chevron-down"
import linkedInIcon from "../../images/linkedIn.svg"
import { BaseMarginContainer } from "../base/base-components"
import { device } from "../base/device"
import { HANbody, HANsmalldescription, HANsubh3, HANsubh4 } from "../base/fonts"
import { navy, teal, yellow } from "../base/colors"

//FOR ENTIRE LIST
export const AlumniTeamContainer = styled(BaseMarginContainer) `
    display: flex;
    flex-wrap: wrap;

`

//FOR ONE MEMBER
export const AlumniMemberContainer = styled.div `
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
export const AlumniImage = styled.img`
    height: 350px;
    object-fit: cover;
    object-position: 50% 50%;
    margin-bottom: 10px;

    @media (min-width: 1600px) {
      height: 450px;
    }

    @media ${device.tablet} {
      height: 250px;
    }

    @media (max-width: 375px) {
      height: auto;
    }
`

export const AlumniMemberNameBox = styled.div`
`

export const AlumniMemberName = styled(HANsubh3)`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 0px;
`

export const LinkedInImage = styled.img`
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: baseline;
`

export const AlumniMemberTitle = styled(HANsmalldescription)`
    margin: 0px;
`

export const CompanyLink = styled.a`
    color: ${teal};

    :hover {
      color: ${yellow};
    }
`


export const TealBar = styled.div `
  height: 2px;
  background-color: ${teal};
  width: 100%;
  margin: 20px 0px;
`

const Alumni = ({ alumni }) => {
  return <AlumniMemberContainer>
    <AlumniImage alt={`${alumni.name}`} 
        src={alumni.profilePicture.fluid.src}/>
    <AlumniMemberNameBox>
      <AlumniMemberName>{alumni.name}</AlumniMemberName>
     <a href={alumni.linkedIn}>
       <LinkedInImage src={linkedInIcon}/>
       </a>
    </AlumniMemberNameBox>
    <AlumniMemberTitle>{alumni.yearInHan}</AlumniMemberTitle>
    <TealBar/>
    <HANsubh4>Currently at &nbsp;
      <CompanyLink href={alumni.currentCompanyLink}>
      {alumni.currentCompany}
    </CompanyLink>
    </HANsubh4>
  </AlumniMemberContainer>
}

export default Alumni