import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import { BaseMarginContainer } from '../../components/base/base-components'
import { RequirementsBlock } from '../../components/get-involved/for-ventures'
import { StepsBlock, LargeCTA, VentureShowcase, LargeOverlayCTA, theme, StudentVentureHero } from '../../components/get-involved/involved-shared-components'

class ForVenturesPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const venturesPage = get(this, 'props.data.contentfulInvolvedVenturePage')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <BaseMarginContainer>
          <StudentVentureHero image={venturesPage.titleImage} headline={venturesPage.headline} description={venturesPage.description.description} />
          <StepsBlock
            header={venturesPage.processHeader}
            description={venturesPage.processShortDescription}
            step1Header={venturesPage.step1Header}
            step1Description={venturesPage.step1Description}
            step2Header={venturesPage.step2Header}
            step2Description={venturesPage.step2Description}
            step3Header={venturesPage.step3Header}
            step3Description={venturesPage.step3Description}
          />
          <RequirementsBlock header={venturesPage.requirementsHeader} description={venturesPage.requirementsDescription} requirements={venturesPage.requirementsList}/>
          <LargeCTA header={venturesPage.applyButtonHeader} label={venturesPage.applyButtonLabel} link={venturesPage.applyButtonLink} theme={theme.yellowCTA} />
          <VentureShowcase ventures={venturesPage.ventureShowcase} />
          <LargeOverlayCTA header={venturesPage.finalCTAHeader} description={venturesPage.finalCTADescription} theme={theme.tealCTA} />
        </BaseMarginContainer>
      </Layout>
    )
  }
}

export default ForVenturesPage

export const pageQuery = graphql`
  query ForVenturesQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInvolvedVenturePage {
      applyButtonHeader
      applyButtonLabel
      applyButtonLink
      description {
        description
      }
      finalCTADescription
      finalCTAHeader
      headline
      pastVenturesHeader
      ventureShowcase {
        name
        shortTagline
        website
        logo {
          fluid(quality: 100) {
            src
          }
        }
      }
      processHeader
      processShortDescription
      requirementsHeader
      requirementsDescription
      requirementsList {
        value {
          value
        }
      }
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