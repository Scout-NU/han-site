import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
class ContactPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const pageTitle = get(this,  'props.data.contentfulContactPage.headline')
        const pagesubtitle = get(this,  'props.data.contentfulContactPage.tagline')
        const emailTitle = get(this,  'props.data.contentfulContactPage.emailHeader')
        const emailSubtitle = get(this,  'props.data.contentfulContactPage.emailDescription')
        const emailIcon = get(this,  'props.data.contentfulContactPage.emailIcon.image.file.url')
        const emailValue = get(this,  'props.data.contentfulContactPage.email.value.value')
        const linkedInTitle = get(this,  'props.data.contentfulContactPage.linkedInHeader')
        const linkedInSubtitle = get(this,  'props.data.contentfulContactPage.linkedInDescription')
        const linkedInIcon = get(this,  'props.data.contentfulContactPage.linkedInIcon.image.file.url')
        const linkedInValue = get(this,  'props.data.contentfulContactPage.linkedIn.value.value')
        const newsletterTitle = get(this,  'props.data.contentfulContactPage.newsletterHeader')
        const newsletterSubtitle = get(this,  'props.data.contentfulContactPage.newsletterDescription')
        const newsletterIcon = get(this,  'props.data.contentfulContactPage.newsletterIcon.image.file.url')
        const faqTitle = get(this,  'props.data.contentfulContactPage.faqHeader')
        const faqIcon = get(this,  'props.data.contentfulContactPage.faqImage.file.url')
        const socialMediaTitle = get(this,  'props.data.contentfulContactPage.socialMediaHeader')
        const socialMediaSubtitle = get(this,  'props.data.contentfulContactPage.socialMediaDescription')
       

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
                <div>{pageTitle}</div>
                <div>{pagesubtitle}</div>
                <div>{emailTitle}</div>
                <div>{emailSubtitle}</div>
                <img src={emailIcon}/>
                <div>{emailValue}</div>
                <div>{linkedInTitle}</div>
                <div>{linkedInSubtitle}</div>
                <img src={linkedInIcon}/>
                <div>{linkedInValue}</div>
                <div>{newsletterTitle}</div>
                <div>{newsletterSubtitle}</div>
                <img src={newsletterIcon}/>
                <div>{faqTitle}</div>
                <img src={faqIcon}/>
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
          image {
            file {
              url
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
          image {
            file {
              url
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
          image {
            file {
              url
            }
          }
        }
        faqHeader
        faqImage {
          file {
            url
          }
        }
        socialMediaHeader
        socialMediaDescription
      }
  }
`