import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow, darkGray } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh3, HANsubh4 } from "../base/fonts"
import { BaseMarginContainer, Button, SecondaryButton } from "../base/base-components"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"

export const NewsletterBlockContainer = styled(BaseMarginContainer)`
    margin-bottom: 100px;
    position: relative;
    display: flex;
    flex-direction: row;

    @media ${device.mobile} {
        flex-direction: column;
    }
`

export const NewsletterPreview = styled.div`
    width: min-content;
    min-width: 250px;

    @media ${device.mobile} {
        width: 100%;
        height: 50vh;
        margin-bottom: 50px;
    }
`

export const NewsletterImage = styled.img`
    object-fit: contain;
    height: 100%;
    width: 100%;
`

export const NewsletterDescriptionContainer = styled.div`
    flex: 1 1 auto;
    margin-left: 30px;
    align-self: center;

    @media ${device.mobile} {
        margin-left: 0px;
    }
`


export const NewsletterSubheader = styled(HANsubh3)`
    margin-bottom: 0;
`

export const NewsletterButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 50px;
    row-gap: 15px;

    @media ${device.mobile} {
        justify-content: center;
    }
`

export const PastIssuesLink = styled(Link)`
    margin-left: 10px;
    display: flex;
`


const NewsletterBlock = ({ newsletter, title }) => {
    return <NewsletterBlockContainer>
        <NewsletterPreview>
            <NewsletterImage src="https://www.cover-pages.com/wp-content/uploads/2018/10/cover-page-cover-pages.com-002-n.png" />
        </NewsletterPreview>
        <NewsletterDescriptionContainer>
            <NewsletterSubheader color={darkGray}>{title}</NewsletterSubheader>
            <HANh2>{newsletter.title}</HANh2>
            {/* <HANbody>{newsletter.description.description}</HANbody> */}
            <HANbody>Our Spring 2020 newsletter highlights the events we hosted at Northeastern and portfolio companies including Parallel Pipes, Mount Locks, Bountium, Imaginostics, Foodspace, Drink Simple, and The Oyster Common!</HANbody>
            <br />
            <NewsletterButtonContainer>
                <Link to={`https://${newsletter.newsletterFile.file.url}`}>
                    <Button> Read More</Button>
                </Link>
                <PastIssuesLink to={'/'}>
                    <SecondaryButton>Past Issues</SecondaryButton>
                </PastIssuesLink>
            </NewsletterButtonContainer>
        </NewsletterDescriptionContainer>
    </NewsletterBlockContainer>
}

export default NewsletterBlock