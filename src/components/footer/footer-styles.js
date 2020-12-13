import styled from "styled-components"
import { lightGray, darkGray, teal } from "../base/colors"
import { device } from "../base/device.js"

export const FooterContainer = styled.div`
    background-color: ${lightGray};
    padding: 20px 100px 20px 100px;
    @media ${device.mobile} {
        padding: 10% 10% 0 10%;
    }
`
export const FooterRowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 0 5% 0;
    flex-wrap: nowrap;
    @media ${device.tablet} {
        flex-wrap: wrap;
        padding: 0;
        margin: 5% 0 5% 0;
    }
`

export const FooterSubsectionContainer = styled.div`
    width: 50%;
    flex-wrap: nowrap;
    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.mobile} {
        flex-wrap: wrap;
        padding: 10% 0 0 0; 
    }
`

export const FooterLogo = styled.img`
    width: 66%;
    @media ${device.mobile} {
        width: 100%;
    }
`

export const FooterDescription = styled.p`
    width: 66%;
    margin-top: 20px;
    @media ${device.mobile} {
        width: 83%
    }
`

export const FooterContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: baseline;
    flex-wrap: nowrap;
    @media ${device.smLaptop} {
        width: 100%;
    }
    @media ${device.mobile} {
        flex-wrap: wrap;
        padding: 5% 0 15% 0;
    }
`
export const FooterSocialBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 30px 0 30px 0;
    width: 70%;
    @media ${device.smLaptop} {
        width: 100%;
    }
    @media ${device.tablet} {
        width: 70%;
    }
    @media ${device.mobile} {
        width: 100%;
        padding: 2% 0 0 0;
    }
`

export const ConnectContactText = styled.p`
    padding-right: 10%;
    @media ${device.smLaptop} {
        padding-right: 20%;
    }
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

export const AffiliationContainer = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    @media ${device.smLaptop} {
        width: 100%;
    }
    @media ${device.mobile} {
        display: none;
    }
`

export const AffiliationImg = styled.img`
    width: 30%;
    height: auto;
    display: flex;
    padding: 5px;
    object-fit: contain;
`

export const ItalicCaption = styled.p`
    font-style: italic;
    font-size: 14px;
    color: ${darkGray};
    padding-right: 10%;
    margin: 0px;
    @media ${device.smLaptop} {
    }
`

export const FooterSmallCaption = styled.p`
    font-size: 14px;
    color: ${darkGray};
    @media ${device.smLaptop} {
        padding-right: 10%;
    }
    @media ${device.mobile} {
        padding-right: 0%
    }
`