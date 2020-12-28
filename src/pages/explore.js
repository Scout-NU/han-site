import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Event from '../components/explore/event/event'
import Newsletter from '../components/explore/newsletter'
import get from 'lodash/get'
import Layout from '../components/layout'
import EventsBlock from '../components/explore/event/eventsBlock'
import HeaderBar from '../components/base/header-bar'
class ExplorePage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const explorePage = get(this,  'props.data.contentfulExplorePage')
        const events = get(this, 'props.data.allContentfulEvent.edges')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <HeaderBar title={explorePage.headline}/>
              <Newsletter title={explorePage.newsletterHeader} newsletter={explorePage.featuredNewsletter}/>
              <h2>{explorePage.venturesAndInvestorsHeader}</h2>
              <div>{explorePage.venturesAndInvestorsSubheader}</div>
              <h2>{explorePage.studentsHeader}</h2>
              <div>{explorePage.studentsSubheader}</div>
              <div>{explorePage.blogButtonHeader}</div>
              <div>{explorePage.blogButtonLabel}</div>
              <div>{explorePage.noEventsMessage}</div>
              <EventsBlock 
              title={explorePage.studentsHeader} 
              description={explorePage.studentsSubheader} 
              noEvents={explorePage.noEventsMessage} 
              events={explorePage.upcomingEvents}/>
              {/* <ul>
                {events.map(({ node }) => {
                  return (
                    <li>
                      <Event event={node} />
                    </li>
                  )
                })}
              </ul> */}
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
        }
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