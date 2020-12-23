import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import Alumni, { AlumniTeamContainer } from '../../components/people/alumni'
import HeaderBar from '../../components/base/header-bar'

class AlumniPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const alumniPage = get(this, 'props.data.contentfulAlumniPage')
    const alumni = get(this, 'props.data.allContentfulAlumni.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HeaderBar grayBackground isTop title={alumniPage.alumniHeader} body={alumniPage.description.description}/>
        <AlumniTeamContainer>
          {
            alumniPage.alumni.map((alumni) => 
            <Alumni key={alumni.name} alumni={alumni}/>
            )
          }
        </AlumniTeamContainer>
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
      description {
        description
      }
      alumni {
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