import React from "react"
import styled from "styled-components"
import { BaseMarginContainer } from "../base/base-components"
import { darkGray, navy, teal, yellow, white } from "../base/colors"
import { HANdescription, HANh1, HANsubh1, HANsubh4, HANbody, HANsubh3 } from "../base/fonts"
import { device } from "../base/device"
import LinkedIn from "../../images/linkedIn.svg"
import Instagram from "../../images/instagram.svg"
import Medium from "../../images/medium.svg"
import Newsletter from "../../images/newsletterIcon.svg"
import Email from "../../images/emailIcon.svg"
import ArrowIconSVG from '../../images/arrowIcon'

const ContactHeadingContainer = styled.div`
    margin: 210px 0px 100px 0px;
    @media ${device.tablet} {
        margin: 170px 0px 100px 0px;
    }
    @media ${device.mobile} {
        margin: 150px 0px 90px 0px;
    }
`

const HalfWidthContainer = styled.div`
    width: 50%;
    padding-right: 40px;
    @media ${device.mobile} {
        width: 100%;
    }
`

const FAQButton = styled.div`
    width: 50%;
    height: 200px;
    position: absolute;
    top: 0;
    right: 0;
    @media ${device.mobile} {
        position: relative;
        width: 100%;
        height: 170px;
    }
`

export const FAQLinkButton = styled.button`
    border: none;
    position: relative;
    padding: 0px;
    color: ${yellow};
    background-color: transparent;
    font-family: URW DIN, sans-serif;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    svg {
        margin-left: 10px;
        margin-bottom: 2px;
        width: 40px;
        height: 40px;
    }
    svg path { 
        fill: transparent; transition: all 0.2s;
    }
    &:hover svg path { 
        fill: ${yellow}; 
    }
`

const FAQBlockLink = styled.a`
    &:hover {
        text-decoration: none;
    }
`

const FAQTealBlock = styled.div`
    width: 95%;
    height: 90%;
    background: ${teal};
    padding: 30px 40px;
    @media ${device.mobile} {
        width: 100%;
        height: 100%;
        padding: 30px;
    }
`
const AccentBlock = styled.div`
    position: absolute;
    background-color: ${yellow};
    width: 12.5%;
    height: 40%;
    bottom: 0;
    right: 0;
    @media ${device.mobile} {
        display: none;
    }
`

const AccentBlockSmall = styled(AccentBlock)`
    width: 9%;
    height: 20%;
    opacity: 30%;
    bottom: 0;
    right: 12.5%;
    @media ${device.mobile} {
        display: none;
    }
`

const ContactInfoContainer = styled.div`
    position: relative;
`

const ContactGroup = styled.div`
    margin-bottom: 70px;
    @media ${device.mobile} {
        margin-bottom: 45px;
    }
`

const ContactHANdescription = styled(HANdescription)`
    margin-bottom: 8px;
    line-height: 22px;
`

const ContactHANbody = styled(HANbody)`
    margin: 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    @media ${device.mobile} {
        width: 80%;
    }
`

const EmailHANbody = styled(ContactHANbody)`
    @media (max-width: 750px) {
        width: 180px;
    }
    @media ${device.mobile} {
        width: 160px;
    }
`

const LinkBlock = styled.a`
    display: flex;
    align-items: center;
    margin-top: 30px;
    width: 100%;
    @media ${device.mobile} {
        margin-top: 15px;
    }
`

const SocialIcon = styled.img`
  width: 40px;
  margin-right: 10px;
  @media ${device.mobile} {
      width: 35px;
  }
`

const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
    margin-top: 30px;
    @media ${device.mobile} {
        width: 130px;
        margin-top: 15px;
        padding-bottom: 40px;
    }
`

const Contact = (props) => (
    <BaseMarginContainer>
        <ContactHeadingContainer>
            <HANh1>{props.headline}</HANh1>
            <HANsubh1 color={darkGray}>{props.tagline}</HANsubh1>
        </ContactHeadingContainer>
        <ContactInfoContainer>
            <ContactGroup>
                <HalfWidthContainer>
                    <ContactHANdescription color={navy}>{props.emailHeader}</ContactHANdescription>
                    <HANsubh4 color={darkGray}>{props.emailDescription}</HANsubh4>
                    <LinkBlock href={`mailto:${props.contactInfoLinks.email}`}>
                        <SocialIcon src={Email} />
                        <EmailHANbody color={teal}>{props.contactInfoLinks.email}</EmailHANbody>
                    </LinkBlock>
                </HalfWidthContainer>
            </ContactGroup>
            <ContactGroup>
                <ContactHANdescription color={navy}>{props.linkedInHeader}</ContactHANdescription>
                <HANsubh4 color={darkGray}>{props.linkedInDescription}</HANsubh4>
                <LinkBlock href={props.contactInfoLinks.linkedInLink}>
                    <SocialIcon src={LinkedIn} />
                    <ContactHANbody color={teal}>{props.contactInfoLinks.linkedInLink}</ContactHANbody>
                </LinkBlock>
            </ContactGroup>
            <ContactGroup>
                <ContactHANdescription color={navy}>{props.newsletterHeader}</ContactHANdescription>
                <HANsubh4 color={darkGray}>{props.newsletterDescription}</HANsubh4>
                <LinkBlock href={`https://${props.featuredNewsletter.newsletterFile.file.url}`}>
                    <SocialIcon src={Newsletter} />
                    <ContactHANbody color={teal}>{props.featuredNewsletter.title}</ContactHANbody>
                </LinkBlock>
            </ContactGroup>
            <ContactGroup>
                <ContactHANdescription color={navy}>{props.socialMediaHeader}</ContactHANdescription>
                <HANsubh4 color={darkGray}>{props.socialMediaDescription}</HANsubh4>
                <SocialContainer>
                    <a href={props.contactInfoLinks.instagramLink}>
                        <SocialIcon src={Instagram} />
                    </a>
                    <a href={props.contactInfoLinks.mediumLink}>
                        <SocialIcon src={Medium} />
                    </a>
                </SocialContainer>
            </ContactGroup>
            <FAQButton>
                <FAQBlockLink href="/faq">
                    <FAQTealBlock>
                        <HANsubh3 color={white}>{props.faqHeader}</HANsubh3>
                        <FAQLinkButton>FAQ
                        <ArrowIconSVG color={yellow} />
                        </FAQLinkButton>
                    </FAQTealBlock>
                </FAQBlockLink>
                <AccentBlock />
                <AccentBlockSmall />
            </FAQButton>
        </ContactInfoContainer>
    </BaseMarginContainer>
)

export default Contact;