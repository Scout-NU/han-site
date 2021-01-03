import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Event from '../components/explore/event/event'
import Newsletter from '../components/explore/newsletter'
import get from 'lodash/get'
import Layout from '../components/layout'
import EventsBlock from '../components/explore/event/eventsBlock'
import HeaderBar from '../components/base/header-bar'
import VentureSignupBlock from '../components/explore/signup'
import { LargeOverlayCTA, theme } from '../components/get-involved/involved-shared-components'
import { BaseMarginContainer } from '../components/base/base-components'
class ExplorePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const explorePage = get(this, 'props.data.contentfulExplorePage')
    const events = get(this, 'props.data.allContentfulEvent.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HeaderBar title={explorePage.headline} />
        <Newsletter
          title={explorePage.newsletterHeader}
          newsletter={explorePage.featuredNewsletter}
          pastNewslettersLink={explorePage.pastNewslettersLink} />
        <VentureSignupBlock
          title={explorePage.venturesAndInvestorsHeader}
          description={explorePage.venturesAndInvestorsSubheader} />
        <EventsBlock
          title={explorePage.studentsHeader}
          description={explorePage.studentsSubheader}
          noEvents={explorePage.noEventsMessage}
          events={explorePage.upcomingEvents} />
        <BaseMarginContainer>
        <LargeOverlayCTA header={explorePage.blogButtonHeader} description={explorePage.blogButtonLabel} theme={theme.tealCTA} />
        </BaseMarginContainer>
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
        newsletterHeader
        featuredNewsletter {
          title
          description {
            description
          }
          publicationDate
          newsletterFile {
            file {
              url
            }
          }
          previewImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
        pastNewslettersLink
        venturesAndInvestorsHeader
        venturesAndInvestorsSubheader
        studentsHeader
        studentsSubheader
        upcomingEvents {
          title
          description {
            description
          }
          date
          startTime
          endTime
          location
          photo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          hostName
          registrationLink
        }
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