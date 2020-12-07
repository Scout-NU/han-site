import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero/hero'
import Layout from '../components/layout'
import Testimonial from '../components/testimonial/testimonial.js'
import 'bootstrap/dist/css/bootstrap.css';
import { ArrowButton, Button, SecondaryButton, SecondaryButtonIcon } from '../components/base/base-components'
import * as arrowIcon from '../images/arrowIcon.svg'

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const homePage = get(this, 'props.data.contentfulHomePage')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero headline={homePage.headline} tagline={homePage.tagline} heroImage={homePage.heroImage} />
          <div className="wrapper">
            <h1>{homePage.missionStatement.value.value}</h1>
            <h2 className="section-headline">{homePage.statsHeader}</h2>

              {homePage.stats.map(stat =>
                <p>{stat.number} {stat.description}</p>)}

            {homePage.testimonials.map(t =>
                <Testimonial testimonial={t}/>
            )}
            <Link to="/faq">
              <Button>click me</Button>
              <SecondaryButton>secondary Button
              </SecondaryButton>
            </Link>
            <SecondaryButton text="Helloooo"/>
            <p>{homePage.eventHeader}</p>
            {
              homePage.event &&
              <p>{homePage.event.title}</p>
            }
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    contentfulHomePage {
      headline
      tagline
      heroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      contentful_id
      missionStatementHeader
      missionStatement {
        value {
          value
        }
      }
      statisticsHeader
      statisticsButtonLabel
      stats {
        number
        description
      }
      eventHeader
      event {
        title
        date
        endTime
        startTime
        description {
          description
        }
        registrationLink
      }
      testimonialsHeader
      testimonials {
        company
        name
      }
    }
  }
`
