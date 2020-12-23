import React from "react"
import styled from "styled-components"
import { BaseMarginContainer } from "../base/base-components"
import { darkGray, lightGray, navy, teal } from "../base/colors"
import { HANdescription, HANh1, HANsubh1, HANsubh4, HANbody } from "../base/fonts"
import LinkedIn from "../../images/linkedIn.svg"
import Instagram from "../../images/instagram.svg"
import Medium from "../../images/medium.svg"

const ContactHeadingContainer = styled.div`
    margin: 200px 0px 70px 0px;
`

const FAQButton = styled.div`
    background: ${teal};
    width: 50%;
    height: 200px;
    position: absolute;
    top: 0;
    right: 0;
`

const ContactInfoContainer = styled.div`
    position: relative;

`

const ContactGroup = styled.div`
    margin-bottom: 70px;
`

const ContactHANdescription = styled(HANdescription)`
    margin-bottom: 8px;
`

const ContactHANbody = styled(HANbody)`
    flex: 1 1 50%
    width: 80%;
`

const LinkBlock = styled.a`
    display: flex;
    align-items: baseline;
`

const SocialIcon = styled.img`
  width: 40px;
  margin-right: 20px;
`

const Contact = ({ headline, tagline, emailHeader, emailDescription, linkedInHeader, linkedInDescription,
    newsletterHeader, newsletterDescription, featuredNewsletter, socialMediaHeader, socialMediaDescription, contactInfoLinks }) => (
    <BaseMarginContainer>
        <ContactHeadingContainer>
            <HANh1>{headline}</HANh1>
            <HANsubh1 color={darkGray}>{tagline}</HANsubh1>
        </ContactHeadingContainer>
        <ContactInfoContainer>
            <FAQButton />
            <ContactGroup>
                <ContactHANdescription color={navy}>{emailHeader}</ContactHANdescription>
                <HANsubh4 color={darkGray}>{emailDescription}</HANsubh4>
                <HANbody color={teal}>{contactInfoLinks.email}</HANbody>
            </ContactGroup>
            <ContactGroup>
                <ContactHANdescription color={navy}>{linkedInHeader}</ContactHANdescription>
                <HANsubh4 color={darkGray}>{linkedInDescription}</HANsubh4>
                <LinkBlock>
                    <SocialIcon src={LinkedIn} />
                    <ContactHANbody color={teal}>{contactInfoLinks.linkedInLink}</ContactHANbody>
                </LinkBlock>
            </ContactGroup>
            <ContactGroup>
                <ContactHANdescription color={navy}>{newsletterHeader}</ContactHANdescription>
                <HANsubh4 color={darkGray}>{newsletterDescription}</HANsubh4>
                <HANbody as="a" color={teal} href={`https://${featuredNewsletter.newsletterFile.file.url}`}>{featuredNewsletter.title}</HANbody>
            </ContactGroup>
            <ContactGroup>
                <ContactHANdescription color={navy}>{socialMediaHeader}</ContactHANdescription>
                <HANsubh4 color={darkGray}>{socialMediaDescription}</HANsubh4>
                <HANbody color={teal}>{contactInfoLinks.email}</HANbody>
            </ContactGroup>
        </ContactInfoContainer>
    </BaseMarginContainer>
)

export default Contact;