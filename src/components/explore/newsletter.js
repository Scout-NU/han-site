import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow, darkGray } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh3, HANsubh4 } from "../base/fonts"
import { BaseMarginContainer, Button } from "../base/base-components"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"
import Event from "./event"

//subh3, h2, body, both buttons

export const NewsletterBlockContainer = styled(BaseMarginContainer)`
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
`

export const NewsletterPreview = styled.div`
    position: relative;

`

export const NewsletterDescriptionContainer = styled.div`
    position: relative;


`
export const PastEventsButton = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`


const NewsletterBlock = ({ newsletter, title }) => {
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
            <PastEventsButton>
            <Link to={'/'}>
                <Button>
                    View past events
                </Button>
            </Link>
            </PastEventsButton>
        </EventBlockContainer>
}

export default NewsletterBlock

export default ({ newsletter }) => (
  <> 
  {newsletter.title}, 
  {newsletter.publicationDate}
  </>
)