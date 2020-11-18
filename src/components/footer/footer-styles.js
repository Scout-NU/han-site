import React from "react"
import styled from "styled-components"
import { lightGray, darkGray, teal } from "../base/colors"
import Img from "gatsby-image"

export const FooterSocialIcon = styled.img`
    width: 25px
    height: 25px
`

export const FooterSocialBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 30px 0 30px 0;
    width: 70%;
`
export const FooterContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: baseline;
`

export const ConnectContactText = styled.p`

`

export const FooterSubsectionContainer = styled.div`
    width: 50%;
`

export const FooterContainer = styled.div`
    background-color: ${lightGray};
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 20px;
`

export const AffiliationImg = styled.img`
    width: 30%;
    height: auto;
    display: inline-block;
    padding: 5px;
    object-fit: contain;
`

export const AffiliationContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: baseline
`
export const ItalicCaption = styled.p`
    font-style: italic;
    font-size: 14px;
    color: ${darkGray};
`

export const FooterLogo = styled.img`
    width: 66%
`

export const FooterDescription = styled.p`
    width: 66%;
    margin-top: 20px;
`

export const FooterRowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-top: 40px;
`
export const FooterSmallCaption = styled.p`
    font-size: 14px;
    color: ${darkGray};
`

export const MailtoLink = styled.a`
    color: ${teal};
    &:hover {
        color: ${teal};
    }
    &:focus {
        color: ${teal};
    }
`