import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero/hero'
import Layout from '../components/layout'
import Testimonial from '../components/testimonial/testimonial'
import 'bootstrap/dist/css/bootstrap.css';
import { ArrowButton, BaseMarginContainer, Button, SecondaryButton, SecondaryButtonIcon } from '../components/base/base-components'
import * as arrowIcon from '../images/arrowIcon.svg'
import HomepageEvent from '../components/event/homepage-event'
import { HANbody, HANdescription, HANh1, HANh2, HANh3, HANh4, HANsmalldescription, HANSpecialBody, HANsubh1, HANsubh2, HANsubh3, HANsubh4 } from '../components/base/fonts'

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const homePage = get(this, 'props.data.contentfulHomePage')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero headline={homePage.headline} tagline={homePage.tagline} heroImage={homePage.heroImage} />
            <h1>{homePage.missionStatement.value.value}</h1>
            <h2 className="section-headline">{homePage.statsHeader}</h2>

              {homePage.stats.map(stat =>
                <p>{stat.number} {stat.description}</p>)}
            <HomepageEvent event={homePage.event} eventHeader={homePage.eventHeader}/>

            <HANh1>Header 1</HANh1>
            <HANh2>Header 2</HANh2>
            <HANh3>Header 3</HANh3>
            <HANh4>Header 4</HANh4>
            <HANsubh1>Subheader 1</HANsubh1>
            <HANsubh2>Subheader 2</HANsubh2>
            <HANsubh3>Subheader 3</HANsubh3>
            <HANsubh4>Subheader 4</HANsubh4>
            <HANbody>HAN body HAN body HAN body HAN body HAN body HAN body HAN body HAN body </HANbody>
            <HANSpecialBody>HAN body 2 HAN body 2 HAN body 2 HAN body 2 HAN body2  HAN body2  </HANSpecialBody>
            <HANdescription>HAN Description</HANdescription>
            <HANsmalldescription>HAN small description</HANsmalldescription>





            <Testimonial carousel={homePage.testimonials} carouselHeader={homePage.testimonialsHeader}/>
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
        fluid (quality: 100){
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
        location
      }
      testimonialsHeader
      testimonials {
        company
        companyWebsite
        name
        profilePicture {
          file {
            url
          }
        }
        testimonial {
          testimonial
        }
      }
    }
  }
`
