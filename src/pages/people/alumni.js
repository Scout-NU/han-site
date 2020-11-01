import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
class AlumniPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
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
    allContentfulAlumni {
        edges {
          node {
            name
            linkedIn
            profilePicture {
              file {
                url
              }
            }
          }
        }
      }
  }
`