import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh2, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { MOBILE_MARGIN, MONTHS_LIST } from "../base/constants"

export const HomepageEventContainer = styled(BaseMarginContainer)`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    margin-top: 150px;
    margin-bottom: 150px;


    @media ${device.mobile} {
        height: fit-content;
        flex-flow: column wrap;
        margin: 50px 0px;
        background-color: ${lightGray};
        padding: 0px ${MOBILE_MARGIN};
    }
`

export const EventTitle = styled(HANh2)`
    @media ${device.mobile} {
        margin-top: -17px;
    }

`

export const EventVisualsContainer = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;

    @media ${device.mobile} {
    }
`



export const EventPicture = styled.img`
    flex-shrink: 0;
    flex-grow: 1;
    min-width: 100%;
    object-fit: cover;
    max-height: 75vh;
    @media ${device.smLaptop} {
        max-height: 500px;
    }
    @media ${device.mobile} {
        max-height: 300px;
    }
`

export const EventDescriptionContainer = styled.div`
    flex: 1 1 50%;
    position: relative;
    background-color:  ${lightGray};
    margin-bottom: 30px;
    top: 30px;
    display: flex;

    @media ${device.mobile} {
        background-color:  unset;
    }
`


export const EventDescription = styled.div`
    padding: 120px 40px 40px 40px;
    align-self: center;

    @media ${device.mobile} {
        padding: 20px;
        padding-bottom: 40px;
    }

`


export const GoldBar = styled.div`
    width: 25vw;
    height: 4px;
    background-color: ${yellow};
    position: absolute;
    top: 70px;
    right: -42px;

    @media ${device.mobile} {
        width: 75vw;
        top: 0px;
        right: -${MOBILE_MARGIN};
    }
`




const HomepageEvent = ({event, eventHeader}) => {
    if(event == null) {
        return <> </>
    }
    else {
        //parse date -> YYYY-MM-DD
        const date = event.date
        const dateList = date.split("-") //
        const month = MONTHS_LIST[dateList[1]]
        const day = dateList[2]

        //parse startTime
        const startTimeString = (event.startTime).slice(0, -2)
    return <>
    <HomepageEventContainer>
        <EventVisualsContainer>
        <EventTitle>{eventHeader}</EventTitle>
        <EventPicture src={event.photo.fluid.src}/>
        </EventVisualsContainer>

        
        <EventDescriptionContainer>
        <EventDescription>
            <HANsubh2>{event.title}</HANsubh2>
            <HANdescription>{month} {day} &nbsp;&nbsp;|&nbsp;&nbsp;{event.location}&nbsp;&nbsp;&nbsp;{startTimeString}–{event.endTime}</HANdescription>
            <HANbody>{event.description.description}
            </HANbody>
            <Link to={event.registrationLink}>
                <SecondaryButton>
                    EventBrite
                </SecondaryButton>
            </Link>
            </EventDescription>
            <GoldBar/>
        </EventDescriptionContainer>
    </HomepageEventContainer>
    </>  
    }
}


export default HomepageEvent