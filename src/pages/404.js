import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Contact from "../components/contact/contact"
import ErrorMessage from '../components/404-block'

class ErrorPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <ErrorMessage/>
      </Layout>
    )
  }
}

export default ErrorPage

export const pageQuery = graphql`
  query ErrorPageQuery {
    site {
      siteMetadata {
        title
      }
    }
}
`