import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import Advisor from '../../components/advisor/advisor'

class AdvisorPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const advisorPage = get(this, 'props.data.contentfulAdvisorPage')
    const advisors = get(this, 'props.data.allContentfulAdvisor.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h1>{advisorPage.advisorHeadline}</h1>
          <div>
            {
              advisors.map(({ node }) =>
                <Advisor advisor={node} />
              )
            }
          </div>
        </div>
      </Layout>
    )
  }
}

export default AdvisorPage

export const pageQuery = graphql`
  query AdvisorQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulAdvisorPage {
      advisorHeadline
    }
    allContentfulAdvisor (sort: {fields: name, order: ASC}) {
      edges {
        node {
          name
          linkedIn
          bio {
            bio
          }
          profilePicture {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`