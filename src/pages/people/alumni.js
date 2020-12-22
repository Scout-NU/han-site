import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import Alumni from '../../components/people/alumni'

class AlumniPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const alumniPage = get(this, 'props.data.contentfulAlumniPage')
    const alumni = get(this, 'props.data.allContentfulAlumni.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div>
          Alumni
          {
            alumni.map(({node}) => 
            <Alumni alumni={node}/>
            )
          }
        </div>

      </Layout>
    )
  }
}

export default AlumniPage

export const pageQuery = graphql`
  query AlumniQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulAlumniPage {
      alumniHeader
    }
    allContentfulAlumni (sort: {fields: yearInHan}) {
      edges {
        node {
          name
          linkedIn
          profilePicture {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          currentCompany
          currentCompanyLink
          yearInHan
        }
      }
    }
  }
`