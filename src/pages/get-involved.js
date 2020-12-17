import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import HeaderBar from '../components/headers/header-bar'
class GetInvolvedPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <HeaderBar/>
            </Layout>
        )
    }
}

export default GetInvolvedPage

export const pageQuery = graphql`
  query GetInvolvedQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInvolvedPage {
      headline
      ventureBlockHeading
      ventureBlockDescription {
        ventureBlockDescription
      }
      investorBlockHeading
      investorBlockDescription {
        investorBlockDescription
      }
      studentBlockHeading
      studentBlockDescription {
        studentBlockDescription
      }
    }
  }
`