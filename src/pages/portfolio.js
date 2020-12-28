import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { PastVentures, PortfolioHeader, PortfolioVenture } from '../components/portfolio/portfolio'
import { BaseMarginContainer } from '../components/base/base-components'
import { HANbody, HANh1, HANh2 } from '../components/base/fonts'
class PortfolioPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const portfolioPage = get(this, 'props.data.contentfulPortfolioPage')
    const allVentures = get(this, 'props.data.allContentfulVenture.edges')


    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <BaseMarginContainer>
          <PortfolioHeader headline={portfolioPage.headline} description={portfolioPage.shortDescription}></PortfolioHeader>
          <PastVentures headline={portfolioPage.pastVenturesSubheader} ventures={allVentures} />
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
        pastVenturesSubheader
        featuredVentures {
          name
          website
          year
          description {
            description
          }
          logo {
            fluid (quality: 100) {
              src
            }
          }
        }
      }
      allContentfulVenture {
        edges {
          node {
            name
            website
            year
            description {
              description
            }
            shortTagline
            logo {
              fluid (quality: 100) {
                src
              }
            }
          }
        }
      }
  }
`