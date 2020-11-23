import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Venture from '../components/venture/venture'
class PortfolioPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const portfolioPage = get(this, 'props.data.contentfulPortfolioPage')
        const allVentures = get(this, 'props.data.allContentfulVenture.edges')


        return (
            <Layout location={this.props.location}>
                <Helmet title={siteTitle} />
                <div>{portfolioPage.headline}</div>
                <div className="wrapper">
                    <h2>{portfolioPage.featuredSubheader}</h2>
                    <div>Huh?</div>
                    <ul>
                        {portfolioPage.featuredVentures.map((venture) => {
                            return (
                                <li>
                                    <Venture venture={venture} />
                                </li>
                            )
                        })}
                    </ul>
                    <h2>{portfolioPage.pastVenturesSubheader}</h2>
                    <ul>
                        {allVentures.map(({node})=> {
                            return (
                                <li>
                                    <Venture venture={node} />
                                </li>
                            )
                        })}
                    </ul>

                </div>
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
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
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
            logo {
              fluid (maxWidth: 100, maxHeight: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
  }
`