import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
class FAQPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const pageTitle = get(this,  'props.data.contentfulFaqPage.headline')
        const category1Label = get(this,  'props.data.contentfulFaqPage.category1Label')
        const category1Questions = get(this,  'props.data.contentfulFaqPage.category1Questions')
        const category2Label = get(this,  'props.data.contentfulFaqPage.category2Label')
        const category2Questions = get(this,  'props.data.contentfulFaqPage.category2Questions')
        const category3Label = get(this,  'props.data.contentfulFaqPage.category3Label')
        const category3Questions = get(this,  'props.data.contentfulFaqPage.category3Questions')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <h1>{pageTitle}</h1>
              <div>{category1Label}</div>
              <div>{category2Label}</div>
              <div>{category3Label}</div>
            </Layout>
        )
    }
}

export default FAQPage

export const pageQuery = graphql`
  query FAQPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFaqPage {
        headline
        category1Label
        category1Questions {
          question
          answer {
            answer
          }
        }
        category2Label
        category2Questions {
          question
          answer {
            answer
          }
        }
        category3Label
        category3Questions {
          question
          answer {
            answer
          }
        }
      }
  }
`