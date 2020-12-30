import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import { BaseMarginContainer } from '../../components/base/base-components'
import { FeaturedVenturesBlock } from '../../components/portfolio/featured-ventures-block'
import { RequirementsBlock } from '../../components/get-involved/for-students'
import { StepsBlock, LargeCTA, LargeOverlayCTA, theme, StudentVentureHero } from '../../components/get-involved/involved-shared-components'

class ForStudentsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const studentsPage = get(this, 'props.data.contentfulInvolvedStudentPage')
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <BaseMarginContainer>
          <StudentVentureHero image={studentsPage.titleImage} headline={studentsPage.headline} description={studentsPage.description.description} />
          <StepsBlock
            header={studentsPage.processHeader}
            description={studentsPage.processShortDescription}
            step1Header={studentsPage.step1Header}
            step1Description={studentsPage.step1Description}
            step2Header={studentsPage.step2Header}
            step2Description={studentsPage.step2Description}
            step3Header={studentsPage.step3Header}
            step3Description={studentsPage.step3Description}
          />
          <RequirementsBlock header={studentsPage.requirementsHeader} description={studentsPage.requirementsDescription} />
          <LargeCTA header={studentsPage.applyButtonHeader} label={studentsPage.applyButtonLabel} link={studentsPage.applyButtonLink} theme={theme.yellowCTA} />
          <FeaturedVenturesBlock heading={studentsPage.pastVenturesHeader} ventures={studentsPage.ventureShowcase} />
          <LargeOverlayCTA header={studentsPage.finalCTAHeader} description={studentsPage.finalCTADescription} theme={theme.tealCTA}/>
        </BaseMarginContainer>
      </Layout>
    )
  }
}

export default ForStudentsPage

export const pageQuery = graphql`
  query ForStudentsQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInvolvedStudentPage {
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
        description {
          description
        }
        website
        logo {
          fluid(quality: 100) {
            src
          }
        }
      }
      processHeader
      processShortDescription
      requirementsDescription
      requirementsHeader
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