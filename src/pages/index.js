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
import Carousel from '../components/carousel/carousel'

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const headline = get(this, 'props.data.contentfulHomePage.headline')
    const tagline = get(this, 'props.data.contentfulHomePage.tagline')
    const missionStatement = get(this, 'props.data.contentfulHomePage.missionStatement.value.value')
    const stats = get(this, 'props.data.contentfulHomePage.stats')
    const testimonials = get(this, 'props.data.contentfulHomePage.testimonials')
    const statsHeader = get(this, 'props.data.contentfulHomePage.statisticsHeader')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <h1>{headline}</h1>
            <h2>{tagline}</h2>
            <h1>{missionStatement}</h1>
            <h2 className="section-headline">{statsHeader}</h2>
            <ul className="article-list">
              {/* {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })} */}
              {stats.map(stat =>
                <p>{stat.number} {stat.description}</p>)}
            </ul>
            {testimonials.map(t =>
                <Testimonial testimonial={t}/>
            )}
            <Carousel carousel={["I am pink!", "I'm currently wearing cool shades", "Cool, cool bunny"]}/>
            <Link to="/faq">
              <Button>click me</Button>
              <SecondaryButton>secondary Button
              </SecondaryButton>
            </Link>
            <SecondaryButton text="Helloooo"/>
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
      tagline
      contentful_id
      headline
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
        role
      }
    }
  }
`
