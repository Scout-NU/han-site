import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Contact from "../components/contact/contact"

class ContactPage extends React.Component {
<<<<<<< HEAD
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const contact = get(this, 'props.data.contentfulContactPage')
    const contactInfoLinks = get(this, 'props.data.contentfulContactInformation')
    return (
      <Layout location={this.props.location}>
        <Contact
          headline={contact.headline}
          tagline={contact.tagline}
          emailHeader={contact.emailHeader}
          emailDescription={contact.emailDescription}
          linkedInHeader={contact.linkedInHeader}
          linkedInDescription={contact.linkedInDescription}
          newsletterHeader={contact.newsletterHeader}
          newsletterDescription={contact.newsletterDescription}
          featuredNewsletter={contact.featuredNewsletter}
          socialMediaHeader={contact.socialMediaHeader}
          socialMediaDescription={contact.socialMediaDescription}
          faqHeader={contact.faqHeader}
          contactInfoLinks={contactInfoLinks}
        ></Contact>
        <Helmet title={siteTitle} />
      </Layout>
    )
  }
=======
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const contact = get(this,  'props.data.contentfulContactPage')
        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
                <div>{contact.headline}</div>
                <div>{contact.tagline}</div>
                <div>{contact.emailHeader}</div>
                <div>{contact.emailDescription}</div>
                {/* <Img fluid={contact.emailIcon.image.fluid}/> */}
                <div>{contact.linkedInHeader}</div>
                <div>{contact.linkedInDescription}</div>
                {/* <Img fluid={contact.linkedInIcon.image.fluid}/> */}
                <div>{contact.newsletterHeader}</div>
                <div>{contact.newsletterDescription}</div>
                {/* <Img fluid={contact.newsletterIcon.image.fluid}/> */}
                <div>{contact.faqHeader}</div>
                {/* <Img fluid={contact.faqImage.fluid}/> */}
                <div>{contact.socialMediaHeader}</div>
                <div>{contact.socialMediaDescription}</div>
            </Layout>
        )
    }
>>>>>>> dev
}

export default ContactPage

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
        linkedInHeader
        linkedInDescription
        newsletterHeader
        newsletterDescription
        featuredNewsletter {
          title
          newsletterFile {
            file {
              url
            }
          }
        }
        faqHeader
        socialMediaHeader
        socialMediaDescription
      }
    contentfulContactInformation {
        email
        instagramLink
        linkedInLink
        mediumLink
    }
  }
`