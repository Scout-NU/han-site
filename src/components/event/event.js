import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow, darkGray } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { MONTHS_LIST } from "../base/constants"

export const EventContainer = styled.div`
    display: flex;
    margin: 50px 0px;
    flex-flow: row;

    @media ${device.mobile} {
      flex-flow: column;
    }
`

export const EventDate = styled.div`
    width: 60px;
    @media ${device.tablet} {
      width: 50px;
    }

    @media ${device.mobile} {
      width: auto;
    }

`

export const EventMonth = styled.div`
    font-family: "URW DIN", sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    margin: 0;
    color: ${darkGray};
    line-height: 22px;


    @media ${device.tablet} {
      font-size: 25px;
    }

    @media ${device.mobile} {
      font-size: 22px;
      display: inline-block;
    }

`
export const EventDay = styled.div`
    font-family: "URW DIN", sans-serif;
    font-weight: 700;
    font-size: 40px;
    margin: 0;
    color: ${teal};

    @media ${device.tablet} {
      font-size: 36px;
    }

    @media ${device.mobile} {
      font-size: 33px;
      display: inline-block;
      padding-left: 10px;
    }
`



export const EventImageContainer = styled.div`
    width: 33vw;
    height: 300px;
    margin: 0px 20px;

    @media ${device.tablet} {
      height: 200px;
    }

    @media ${device.mobile} {
      margin: 0px 0px 10px 0px;

      width: 100%;
      height: 200px;
    }
`

export const EventPicture = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`

export const EventHeader = styled(HANsubh2)`
  margin-bottom: 5px;
`

export const EventDescription = styled.div`
`


const Event = ({event}) => {
        //parse date -> YYYY-MM-DD
        const date = event.date
        const dateList = date.split("-") //
        const month = MONTHS_LIST[dateList[1]]
        const day = dateList[2]

        //parse startTime
        const startTimeString = (event.startTime).slice(0, -2)
    return <EventContainer>
      <EventDate>
        <EventMonth>
          {month}
        </EventMonth>
        <EventDay>
          {day}
        </EventDay>
        </EventDate>
         <EventImageContainer>
          <EventPicture src={event.photo.fluid.src}/>
        </EventImageContainer>
        <EventDescription>
            <EventHeader>{event.title}</EventHeader>
            <HANdescription>{event.location}&nbsp;&nbsp;&nbsp;{startTimeString}–{event.endTime}</HANdescription>
            <HANbody>{event.description.description}
            </HANbody>
            <Link to={event.registrationLink}>
                <SecondaryButton>
                    Register
                </SecondaryButton>
            </Link>
            </EventDescription>
    </EventContainer>  
}

export default Event