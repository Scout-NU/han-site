import React from 'react'
import InstagramIcon from "../../images/instagramIcon"
import LinkedInIcon from "../../images/linkedInIcon"
import MediumIcon from "../../images/mediumIcon"
import logoSrc from "../../images/HAN-logo-09.svg"

import {
  FooterLogo,
  FooterDescription,
  FooterSubsectionContainer,
  FooterContainer,
  AffiliationImg,
  AffiliationContainer,
  FooterSocialBlock,
  FooterContactContainer,
  FooterContactContainerEmail,
  FooterRowContainer,
  ItalicCaption,
  FooterSmallCaption,
  EmailContainer,
  MailtoLink,
  ConnectContactText
}
  from "./footer-styles"


const Footer = ({ contentfulFooter, contactInfo }) => (
  <FooterContainer>
    <FooterRowContainer>
      <FooterSubsectionContainer>
        <FooterLogo src={logoSrc} />
        <FooterDescription>{contentfulFooter.descriptionAboutHan}</FooterDescription>
      </FooterSubsectionContainer>
      <FooterSubsectionContainer>
        <FooterContactContainer>
          <ConnectContactText>CONNECT</ConnectContactText>
          <FooterSocialBlock>
            <a href={contactInfo.instagramLink}><InstagramIcon /></a>
            <a href={contactInfo.linkedInLink}><LinkedInIcon /></a>
            <a href={contactInfo.mediumLink}><MediumIcon /></a>
          </FooterSocialBlock>
        </FooterContactContainer>
        <FooterContactContainerEmail>
          <ConnectContactText>CONTACT</ConnectContactText>
          <EmailContainer>
            <MailtoLink href={"mailto:" + contactInfo.email}>{contactInfo.email}</MailtoLink>
            </EmailContainer>
        </FooterContactContainerEmail>
      </FooterSubsectionContainer>
    </FooterRowContainer>
    <hr />
    <FooterRowContainer>
      <FooterSubsectionContainer>
        <FooterSmallCaption>Northeastern University | HAN &copy; {new Date().getFullYear()} </FooterSmallCaption>
      </FooterSubsectionContainer>
      <FooterSubsectionContainer>
        <AffiliationContainer>
          <ItalicCaption>{contentfulFooter.affiliationText}</ItalicCaption>
          <AffiliationImg alt="logo for D'Amore McKim" src={contentfulFooter.damoreMcKimLogo.fluid.src} />
          <AffiliationImg alt="logo for Mosaic, with the word MOSAIC in gray capital letters and 3 stacked triangles to the left" src={contentfulFooter.mosaicLogo.fluid.src} />
        </AffiliationContainer>
      </FooterSubsectionContainer>
    </FooterRowContainer>
  </FooterContainer>
)

export default Footer