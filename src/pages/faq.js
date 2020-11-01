import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
class FAQPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
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
  }
`