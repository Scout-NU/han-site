import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Img from 'gatsby-image'

class AboutUsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const about = get(this, 'props.data.contentfulAboutPage')
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h1>{about.headline}</h1>
          <h3>{about.intro.intro}</h3>
          <h1>{about.missionStatementHeader}</h1>
          <h3>{about.missionStatement.value.value}</h3>
          <h1>{about.valuesHeader}</h1>
          <p>{about.valuesDescription}</p>
          <div className="row">
            <div className="col">
              <Img alt="" fluid={about.value1Icon.fluid} />
              <p>{about.value1Text}</p>
            </div>
            <div className="col">
              <Img alt="" fluid={about.value2Icon.fluid} />
              <p>{about.value2Text}</p>
            </div>
            <div className="col">
              <Img alt="" fluid={about.value3Icon.fluid} />
              <p>{about.value3Text}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Img alt="" fluid={about.aboutImage1.fluid} />
            </div>
            <div className="col">
              <h3>{about.aboutHeading1}</h3>
              <p>{about.aboutDescription1}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>{about.aboutHeading2}</h3>
              <p>{about.aboutDescription2}</p>
            </div>
            <div className="col">
              <Img alt="" fluid={about.aboutImage2.fluid} />
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h3>{about.teamHeader}</h3>
              <p>{about.teamDescription.teamDescription}</p>
              <Link to="/people/our-team">View Team</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutUsPage

export const pageQuery = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulAboutPage {
      headline
      intro {
        intro
      }
      missionStatementHeader
      missionStatement {
        value {
          value
        }
      }
      valuesHeader
      valuesDescription
      value1Icon  {
        fluid (maxWidth: 100, maxHeight: 100) {
          ...GatsbyContentfulFluid
        }
      }
      value2Icon  {
        fluid (maxWidth: 100, maxHeight: 100) {
          ...GatsbyContentfulFluid
        }
      }
      value3Icon  {
        fluid (maxWidth: 100, maxHeight: 100) {
          ...GatsbyContentfulFluid
        }
      }
      value1Text
      value2Text
      value3Text
      aboutHeading1
      aboutDescription1
      aboutImage1 {
        fluid (maxWidth: 400, maxHeight: 400) {
          ...GatsbyContentfulFluid
        }
      }
      aboutHeading2
      aboutDescription2
      aboutImage2 {
        fluid (maxWidth: 400, maxHeight: 400) {
          ...GatsbyContentfulFluid
        }
      }
      teamHeader
      teamDescription {
        teamDescription
      }
    }
  }
`