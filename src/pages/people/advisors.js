import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import Advisor, { AdvisorsContainer } from '../../components/people/advisor'
import HeaderBar from '../../components/base/header-bar'

class AdvisorPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const advisorPage = get(this, 'props.data.contentfulAdvisorPage')
    const advisors = get(this, 'props.data.allContentfulAdvisor.edges') //is this needed?

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HeaderBar isTop title={advisorPage.advisorHeadline}/>
        <AdvisorsContainer>
            {
              advisorPage.advisors.map(( advisor ) =>
                <Advisor key={advisor.name} advisor={advisor} />
              )
            }
          </AdvisorsContainer>
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
      advisors {
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