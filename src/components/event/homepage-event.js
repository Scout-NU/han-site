import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { MOBILE_MARGIN } from "../base/constants"

export const HomepageEventContainer = styled(BaseMarginContainer)`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    margin-top: 100px;
    margin-bottom: 100px;


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
    @media ${device.mobile} {
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
    align-self: flex-end;

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
    return <>
    <HomepageEventContainer>
        <EventVisualsContainer>
        <EventTitle>{eventHeader}</EventTitle>
        <EventPicture src="https://media.discordapp.net/attachments/336008480022593536/787599362753822720/taipei-taiwan-december-3-2018-people-ride-a-metro-train-in-taipei-taipei-mass-rapid-transit-mrt-bran.png"/>
        </EventVisualsContainer>

        
        <EventDescriptionContainer>
        <EventDescription>
            <HANsubh2>{event.title}</HANsubh2>
            <HANdescription>{event.location}, {event.date} {event.startTime}–{event.endTime}</HANdescription>
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