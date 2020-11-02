import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Venture from '../components/venture/venture'
class PortfolioPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const ventures = get(this, 'props.data.contentfulPortfolioPage.featuredVentures')
        const pageHeadline = get(this, 'props.data.contentfulPortfolioPage.headline')
        const featuredHeader = get(this, 'props.data.contentfulPortfolioPage.featuredSubheader')
        const pastVenturesHeader = get(this, 'props.data.contentfulPortfolioPage.pastVenturesSubheader')

        return (
            <Layout location={this.props.location}>
                <Helmet title={siteTitle} />
                <div>{pageHeadline}</div>
                <div className="wrapper">
                    <h2>{featuredHeader}</h2>
                    <div>Huh?</div>
                    <h2>{pastVenturesHeader}</h2>
                    <ul>
                        {ventures.map((venture) => {
                            return (
                                <li>
                                    <Venture venture={venture} />
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
            file {
              url
            }
          }
        }
      }
  }
`