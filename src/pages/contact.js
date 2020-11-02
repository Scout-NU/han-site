import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
class ContactPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
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