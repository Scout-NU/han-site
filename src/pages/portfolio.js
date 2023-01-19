import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { PastVentures, PortfolioHeader } from '../components/portfolio/portfolio'
import { FeaturedVenturesBlock } from '../components/portfolio/featured-ventures-block'
import { BaseMarginContainer } from '../components/base/base-components'

class PortfolioPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const portfolioPage = get(this, 'props.data.contentfulPortfolioPage')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <BaseMarginContainer>
          <PortfolioHeader headline={portfolioPage.headline} description={portfolioPage.shortDescription}></PortfolioHeader>
          <FeaturedVenturesBlock heading={portfolioPage.featuredSubheader} ventures={portfolioPage.featuredVentures}/>
          <PastVentures headline={portfolioPage.pastVenturesSubheader} ventures={portfolioPage.pastVentures} />
        </BaseMarginContainer>
      </Layout>
    )
  }
}

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPortfolioPage {
        headline
        shortDescription
        featuredSubheader
        featuredVentures {
          name
          website
          description {
            description
          }
          logo {
            fluid (quality: 100) {
              src
            }
          }
          onePager
        }
        pastVenturesSubheader
        pastVentures {
          name
          website
          shortTagline
          logo {
            fluid (quality: 100) {
              src
            }
          }
        }
      }
  }
`