import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './footer.module.css'
import { StaticQuery } from 'gatsby'
import InstagramIcon from "../../images/instagramIcon"
import LinkedInIcon from "../../images/linkedInIcon"
import MediumIcon from "../../images/mediumIcon"


const Footer = ({ contentfulFooter, contactInfo }) => (
  <div>
    <Link to={contactInfo.instagramLink}>
      <InstagramIcon />
    </Link>
    <Link to={contactInfo.linkedInLink}>
      <LinkedInIcon />
    </Link>
    <Link to={contactInfo.mediumLink}>
      <MediumIcon />
    </Link>

    <Img alt="logo for Mosaic, with the word MOSAIC in all caps and " fluid={contentfulFooter.mosaicLogo.fluid} />
    <Img alt="logo for D'Amore McKim" fluid={contentfulFooter.damoreMcKimLogo.fluid} />
    <p>{contentfulFooter.descriptionAboutHan}</p>
  </div>
)

export default Footer