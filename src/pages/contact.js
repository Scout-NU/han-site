import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Contact from "../components/contact/contact"

class ContactPage extends React.Component {
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
          contactInfoLinks={contactInfoLinks}/>
        <Helmet title={siteTitle} />
      </Layout>
    )
  }
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