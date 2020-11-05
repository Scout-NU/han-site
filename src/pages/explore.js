import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
class ExplorePage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const pageTitle = get(this,  'props.data.contentfulExplorePage.headline')
        const newsletterSubheader = get(this,  'props.data.contentfulExplorePage.newsletterSubheader')
        const featuredNewsletter = get(this,  'props.data.contentfulExplorePage.newsletterSubheader')

        const venturesAndInvestorsHeader = get(this,  'props.data.contentfulExplorePage.venturesAndInvestorsHeader')
        const venturesAndInvestorsSubheader = get(this,  'props.data.contentfulExplorePage.venturesAndInvestorsSubheader')
        const studentsHeader = get(this,  'props.data.contentfulExplorePage.studentsHeader')
        const studentsSubheader = get(this,  'props.data.contentfulExplorePage.studentsSubheader')
        const blogButtonHeader = get(this,  'props.data.contentfulExplorePage.blogButtonHeader')
        const blogButtonLabel = get(this,  'props.data.contentfulExplorePage.blogButtonLabel')
        const noEventsMessage = get(this,  'props.data.contentfulExplorePage.noEventsMessage')

        const events = get(this,  'props.data.allContentfulEvent.edges')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <h1>{pageTitle}</h1>
              <div>{studentsHeader}</div>
              <div>{studentsSubheader}</div>
            </Layout>
        )
    }
}

export default ExplorePage

export const pageQuery = graphql`
  query ExplorePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulExplorePage {
        headline
        newsletterSubheader
        featuredNewsletter {
          title
          publicationDate
          newsletterFile {
            file {
              url
            }
          }
        }
        venturesAndInvestorsHeader
        venturesAndInvestorsSubheader
        studentsHeader
        studentsSubheader
        blogButtonHeader
        blogButtonLabel
        noEventsMessage
      }
      allContentfulEvent(sort: {fields: date}) {
        edges {
          node {
            title
            description {
              description
            }
            date
            startTime
            endTime
            location
            photo {
              fluid (maxWidth: 100, maxHeight: 100) {
                ...GatsbyContentfulFluid
              }
            }
            hostName
            registrationLink
          }
        }
      }
  }
`