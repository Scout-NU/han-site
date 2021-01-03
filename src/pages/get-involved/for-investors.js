import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import { BaseMarginContainer } from '../../components/base/base-components'
import { Hero, BenefitsBlock } from '../../components/get-involved/for-investors'
import { FeaturedVenturesBlock } from '../../components/portfolio/featured-ventures-block'
import { StepsBlock, LargeCTA, LargeOverlayCTA, theme } from '../../components/get-involved/involved-shared-components'

class ForInvestorsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const investorsPage = get(this, 'props.data.contentfulInvolvedInvestorPage')
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <BaseMarginContainer>
          <Hero image={investorsPage.titleImage} headline={investorsPage.headline} description={investorsPage.description.description} />
          <BenefitsBlock header={investorsPage.benefitsHeader} benefitsList={investorsPage.benefitsList} />
          <StepsBlock
            header={investorsPage.processHeader}
            description={investorsPage.processShortDescription}
            step1Header={investorsPage.step1Header}
            step1Description={investorsPage.step1Description}
            step2Header={investorsPage.step2Header}
            step2Description={investorsPage.step2Description}
            step3Header={investorsPage.step3Header}
            step3Description={investorsPage.step3Description}
          />
          <LargeCTA header={investorsPage.applyButtonHeader} label={investorsPage.applyButtonLabel} link="/contact" theme={theme.tealCTA}/>
          <FeaturedVenturesBlock heading={investorsPage.pastVenturesHeader} ventures={investorsPage.ventureShowcase} />
          <LargeOverlayCTA header={investorsPage.finalCTAHeader} description={investorsPage.finalCTADescription} theme={theme.yellowCTA} link='/faq'/>
        </BaseMarginContainer>
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
      benefitsHeader
      benefitsList {
        key
        value {
          value
        }
      }
      description {
        description
      }
      finalCTADescription
      finalCTAHeader
      headline
      pastVenturesHeader
      ventureShowcase {
        name
        website
        description {
          description
        }
        logo {
          fluid(quality: 100) {
            src
          }
        }
      }
      processHeader
      processShortDescription
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