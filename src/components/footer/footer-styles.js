import styled from "styled-components"
import { lightGray, darkGray, teal, black } from "../base/colors"
import { device } from "../base/device.js"
import { HANbody, HANdescription } from "../base/fonts"

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
    flex-wrap: wrap;
    @media ${device.tablet} {
        padding: 0;
        margin: 5% 0 5% 0;
    }
    @media ${device.mobile} {
        margin: 0;
    }
`

export const FooterSubsectionContainer = styled.div`
    display: flex;
    flex-direction: column;
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

export const FooterDescription = styled(HANbody)`
    width: 66%;
    margin-top: 20px;
    @media ${device.mobile} {
        width: 83%
    }
`

export const FooterContactContainer = styled.div`
    display: flex;
    width: 70%;
    align-items: baseline;
    flex-wrap: nowrap;
    @media ${device.smLaptop} {
        width: 100%;
    }
    @media ${device.mobile} {
        flex-direction: column;
        padding: 5% 0 15% 0;
    }
`

export const FooterContactContainerEmail = styled(FooterContactContainer)`
    width: 70%;
    justify-content: flex-start;
    display: flex;
`


export const FooterSocialBlock = styled.div`
    display: flex;
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

export const ConnectContactText = styled(HANdescription)`
    color: ${black};
    padding-right: 5vw;
`

export const EmailContainer = styled.div`
    flex: 1 1 70%;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    @media ${device.smLaptop} {
        width: 300px;
    }
    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.mobile} {
        width: 280px;
        padding: 2% 0 0 0;
    }
`

export const MailtoLink = styled.a`
    font-family: "URW DIN", sans-serif;
    font-size: 20px;
    line-height: 27px;
    font-weight: 600;
    text-transform: uppercase;
    min-width: 1%;
    color: ${teal};
    &:hover {
        color: ${teal};
    }
    &:focus {
        color: ${teal};
    }
    @media ${device.smLaptop} {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    @media ${device.tablet} {
        overflow-wrap: unset;
        word-wrap: unset;
    }
    @media ${device.mobile} {
        font-size: 18px;
        overflow-wrap: unset;
        word-wrap: unset;
    }
    @media (max-width: 485px) {
        overflow-wrap: break-word;
        word-wrap: break-word;
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
    font-family: "Merriweather", serif;
    font-style: italic;
    font-size: 14px;
    color: ${darkGray};
    padding-right: 10%;
    margin: 0px;
    @media ${device.smLaptop} {
    }
`

export const FooterSmallCaption = styled(HANdescription)`
    font-size: 14px;
    margin: 0;
    color: ${darkGray};
    @media ${device.smLaptop} {
        padding-right: 10%;
    }
    @media ${device.mobile} {
        padding-right: 0%
    }
`

export const LoveByScout = styled(FooterSmallCaption) `
    flex: 1 1 100%;
    a {
        color: ${darkGray};
        text-decoration: underline;
    }
    @media ${device.mobile} {
        padding-bottom: 10%;
    }
`