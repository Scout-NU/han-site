import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
class OurTeamPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
            </Layout>
        )
    }
}

export default OurTeamPage

export const pageQuery = graphql`
  query OurTeamQuery {
    allContentfulAdvisor {
      edges {
        node {
          bio {
            bio
          }
          name
          linkedIn
          profilePicture {
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulTeamMember {
      edges {
        node {
          bio
          email
          name
          linkedIn
          profilePicture {
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
          title
        }
      }
    }
  }
  
`