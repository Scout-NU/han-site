import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { SecondaryButton } from "../base/base-components"

export const HomepageEventContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 100px 0px;
    position: relative;

    @media ${device.mobile} {
        height: fit-content;
    }
`

export const EventTitle = styled(HANh2)`
`

export const EventVisualsContainer = styled.div`
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
`



export const EventPicture = styled.img`
    flex-shrink: 0;
    flex-grow: 1;
    min-width: 100%;
    object-fit: cover;
    @media ${device.tablet} {
    }

    @media ${device.mobile} {
    }
`

export const EventDescriptionContainer = styled.div`
    flex: 1 1 40%;
    position: relative;
    background-color:  ${lightGray};
    margin-bottom: 30px;
    top: 30px;
    display: flex;
`


export const EventDescription = styled.div`
    padding: 120px 40px 40px 40px;
    align-self: flex-end;
`


export const GoldBar = styled.div`
    width: 300px;
    height: 4px;
    background-color: ${yellow};
    position: absolute;
    top: 70px;
    left: 200px;
`




const HomepageEvent = () => {
    return <>
    <HomepageEventContainer>
        <EventVisualsContainer>
        <EventTitle>Upcoming Event</EventTitle>
        <EventPicture src="https://media.discordapp.net/attachments/336008480022593536/787599362753822720/taipei-taiwan-december-3-2018-people-ride-a-metro-train-in-taipei-taipei-mass-rapid-transit-mrt-bran.png"/>
        </EventVisualsContainer>

        
        <EventDescriptionContainer>
        <EventDescription>
            <HANsubh2>Event Title insert</HANsubh2>
            <HANdescription>Time here</HANdescription>
            <HANbody>Event description here. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed sed et auctor senectus nisi, habitant eu augue condimentum. 
                Euismod aenean tortor malesuada in sodales vitae odio ut in.
            </HANbody>
            <Link to={"google.com"}>
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


export default HomepageEvent