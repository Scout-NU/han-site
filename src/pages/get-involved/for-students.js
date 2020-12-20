import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
class ForStudentsPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
            </Layout>
        )
    }
}

export default ForStudentsPage

export const pageQuery = graphql`
  query ForStudentsQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInvolvedStudentPage {
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
      requirementsDescription
      requirementsHeader
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