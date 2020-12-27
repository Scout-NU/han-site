import React from "react"
import styled from "styled-components"
import linkedInIcon from "../../images/linkedIn.svg"
import { BaseMarginContainer } from "../base/base-components"
import { device } from "../base/device"
import { HANbody, HANsmalldescription, HANsubh3 } from "../base/fonts"
import { teal } from "../base/colors"

//FOR ENTIRE LIST
export const AdvisorsContainer = styled(BaseMarginContainer)`
    display: flex;
    flex-wrap: wrap;

`

//FOR ONE MEMBER
export const AdvisorContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    padding: 10px;
    margin-bottom: 50px;
`

export const AdvsiorImageContainer = styled.div`
  flex-basis: 300px;
  margin-right: 50px;
  margin-bottom: 20px;
`
export const AdvisorImage = styled.img`
    width: 100%;
    height: 100%
    object-fit: cover;
    object-position: 50% 0%;
`

export const AdvisorName = styled(HANsubh3)`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 0px;
    margin-top: 5px;
`
export const LinkedInImage = styled.img`
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: baseline;
`
export const AdvisorTitle = styled(HANsmalldescription)`
    margin: 0px;
`

export const AdvisorDetails = styled.div`
  flex: 1 1 0;

  @media ${device.mobile} {
    flex-basis: 100%;
  }
`

export const TealBar = styled.div`
  height: 2px;
  margin: 10px 0px;
  background-color: ${teal};
  width: 100%;
`

const Advisor = ({ advisor }) => {
  return <AdvisorContainer>
    <AdvsiorImageContainer>
    <AdvisorImage alt={`${advisor.name}`}
      src={advisor.profilePicture.fluid.src} />
    </AdvsiorImageContainer>
    <AdvisorDetails>
      <AdvisorName>{advisor.name}</AdvisorName>
      <a href={advisor.linkedIn}>
        <LinkedInImage src={linkedInIcon} />
      </a>
      {/* <AdvisorTitle>
          If you guys want to add advisor titles, uncomment this and add query here!
      </AdvisorTitle> */}
      <TealBar />
        <HANbody>
          {advisor.bio.bio}
        </HANbody>
    </AdvisorDetails>
  </AdvisorContainer>

}
export default Advisor



