import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
class ForVenturesPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const venturesPage = get(this, 'props.data.contentfulInvolvedVenturePage')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
            </Layout>
        )
    }
}

export default ForVenturesPage

export const pageQuery = graphql`
  query ForVenturesQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInvolvedVenturePage {
      applyButtonHeader
      applyButtonLabel
      applyButtonLink
      description {
        description
      }
      finalCTADescription
      finalCTAHeader
      headline
      pastVenturesHeader
      processHeader
      processShortDescription
      requirementsHeader
      requirementsDescription
      requirementsList {
        value {
          value
        }
      }
      step1Description
      step1Header
      step2Description
      step2Header
      step3Description
      step3Header
      titleImage {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`