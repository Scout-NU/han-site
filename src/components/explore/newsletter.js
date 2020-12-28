import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow, darkGray } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh3, HANsubh4 } from "../base/fonts"
import { BaseMarginContainer, Button } from "../base/base-components"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"

//subh3, h2, body, both buttons

export const NewsletterBlockContainer = styled(BaseMarginContainer)`
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
`

export const NewsletterPreview = styled.div`

`

export const NewsletterDescriptionContainer = styled.div`

`
export const PastEventsButton = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`

export const NewsletterButtonContainer = styled.div `


`

const NewsletterBlock = ({ newsletter, title }) => {
        return <NewsletterBlockContainer>
        <NewsletterPreview>
        </NewsletterPreview>
        <NewsletterDescriptionContainer>
        <HANsubh3>HI</HANsubh3>
        <HANh2>{newsletter.title}</HANh2>
        <HANbody>{newsletter.description.description}</HANbody>
        <NewsletterButtonContainer>
        </NewsletterButtonContainer>

        </NewsletterDescriptionContainer>
            
        </NewsletterBlockContainer>
}

export default NewsletterBlock