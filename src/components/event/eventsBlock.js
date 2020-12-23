import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow, darkGray } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh3, HANsubh4 } from "../base/fonts"
import { BaseMarginContainer, Button } from "../base/base-components"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"
import Event from "./event"


export const EventBlockContainer = styled(BaseMarginContainer)`
    margin-top: 100px;
    position: relative;
`
export const EventHeaderContainer = styled.div`
    position: relative;

`
export const GoldBar = styled.div`
    width: calc(${DESKTOP_MARGIN} - 40px);
    height: 4px;
    background-color: ${yellow};
    position: relative;
    left: -${DESKTOP_MARGIN};
    top: 35px;


    @media ${device.smLaptop} {
        width: calc(${LAPTOP_MARGIN} - 20px);
        left: -${LAPTOP_MARGIN};
    }

    @media ${device.tablet} {
        width: 25vw;
        top: -20px;
        left: -${TABLET_MARGIN};
    }

    @media ${device.mobile} {
        width: 45vw;
        left: -${MOBILE_MARGIN};
    }
`
export const NoEventsMessage = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    height: 250px;
    // background-color: ${lightGray};
    text-align: center;
    
    p {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
      }

`


const EventsBlock = ({ title, description, noEvents, events }) => {
    if (events === null || events.length === 0) {
        return <EventBlockContainer>
            <EventHeaderContainer>
                <GoldBar />
                <HANh2>{title}</HANh2>
                <HANsubh3 color={darkGray}>{description}</HANsubh3>
            </EventHeaderContainer>
            <NoEventsMessage>
                <HANsubh4>{noEvents}</HANsubh4>
            </NoEventsMessage>
            <Link to={'/'}>
                <Button>
                    View past events
                </Button>
            </Link>
        </EventBlockContainer>
    } else {
        return <EventBlockContainer>
            <EventHeaderContainer>
                <GoldBar />
                <HANh2>{title}</HANh2>
                <HANsubh3 color={darkGray}>{description}</HANsubh3>
            </EventHeaderContainer>
            {events.map((event) => {
                return (
                    <Event event={event} />
                )
            })}
            <Link to={'/'}>
                <Button>
                    View past events
                </Button>
            </Link>
        </EventBlockContainer>
    }
}

export default EventsBlock