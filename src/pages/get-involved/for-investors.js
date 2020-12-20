import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'

class ForInvestorsPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const investorsPage = get(this, 'props.data.contentfulInvolvedInvestorPage')
        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              
            </Layout>
        )
    }
}

export default ForInvestorsPage

export const pageQuery = graphql`
  query ForInvestorsQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInvolvedInvestorPage {
      applyButtonHeader
      applyButtonLabel
      applyButtonLink
      benefitsHeader
      description {
        description
      }
      finalCTADescription
      finalCTAHeader
      headline
      pastVenturesHeader
      processHeader
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