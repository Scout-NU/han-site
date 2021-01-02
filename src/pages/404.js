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
    const siteData = get(this, 'props.data.contentful404Page')


    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <ErrorMessage 
            title={siteData.errorTitle} 
            description={siteData.errorDescription.errorDescription}
            image={siteData.errorImage.fluid.src}/>
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
    contentful404Page {
        errorTitle
        errorDescription {
          errorDescription
        }
        errorImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
}
`