import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Img from 'gatsby-image'
class ContactPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const pageTitle = get(this,  'props.data.contentfulContactPage.headline')
        const pagesubtitle = get(this,  'props.data.contentfulContactPage.tagline')
        const emailTitle = get(this,  'props.data.contentfulContactPage.emailHeader')
        const emailSubtitle = get(this,  'props.data.contentfulContactPage.emailDescription')
        const emailIcon = get(this,  'props.data.contentfulContactPage.emailIcon.image.fluid')
        const emailValue = get(this,  'props.data.contentfulContactPage.email.value.value')
        const linkedInTitle = get(this,  'props.data.contentfulContactPage.linkedInHeader')
        const linkedInSubtitle = get(this,  'props.data.contentfulContactPage.linkedInDescription')
        const linkedInIcon = get(this,  'props.data.contentfulContactPage.linkedInIcon.image.fluid')
        const linkedInValue = get(this,  'props.data.contentfulContactPage.linkedIn.value.value')
        const newsletterTitle = get(this,  'props.data.contentfulContactPage.newsletterHeader')
        const newsletterSubtitle = get(this,  'props.data.contentfulContactPage.newsletterDescription')
        const newsletterIcon = get(this,  'props.data.contentfulContactPage.newsletterIcon.image.fluid')
        const faqTitle = get(this,  'props.data.contentfulContactPage.faqHeader')
        const faqIcon = get(this,  'props.data.contentfulContactPage.faqImage.fluid')
        const socialMediaTitle = get(this,  'props.data.contentfulContactPage.socialMediaHeader')
        const socialMediaSubtitle = get(this,  'props.data.contentfulContactPage.socialMediaDescription')
       

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
                <div>{pageTitle}</div>
                <div>{pagesubtitle}</div>
                <div>{emailTitle}</div>
                <div>{emailSubtitle}</div>
                <Img fluid={emailIcon}/>
                <div>{emailValue}</div>
                <div>{linkedInTitle}</div>
                <div>{linkedInSubtitle}</div>
                <Img fluid={linkedInIcon}/>
                <div>{linkedInValue}</div>
                <div>{newsletterTitle}</div>
                <div>{newsletterSubtitle}</div>
                <Img fluid={newsletterIcon}/>
                <div>{faqTitle}</div>
                <Img fluid={faqIcon}/>
                <div>{socialMediaTitle}</div>
                <div>{socialMediaSubtitle}</div>

            </Layout>
        )
    }
}

export default ContactPage

//TODO: Ask Angelina about getting contact block?
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulContactPage {
        headline
        tagline
        emailHeader
        emailDescription
        emailIcon {
          image{
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
        email {
          value {
            value
          }
        }
        linkedInHeader
        linkedInDescription
        linkedInIcon {
          image{
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
        linkedIn {
          value {
            value
          }
        }
        newsletterHeader
        newsletterDescription
        newsletterIcon {
          image{
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
        faqHeader
        faqImage {
          fluid (maxWidth: 100, maxHeight: 100) {
            ...GatsbyContentfulFluid
          }
        }
        socialMediaHeader
        socialMediaDescription
      }
  }
`