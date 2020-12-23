import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import HeaderBar from '../components/base/header-bar'
import ForVentureBlock from '../components/get-involved-overview/for-venture-block'
import ForStudentBlock from '../components/get-involved-overview/for-students-block'
import ForInvestorBlock from '../components/get-involved-overview/for-investor-block'
class GetInvolvedPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const involvedPage = get(this, 'props.data.contentfulInvolvedPage');

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HeaderBar isSide title={involvedPage.headline} />
        <ForVentureBlock
          header={involvedPage.ventureBlockHeading}
          description={involvedPage.ventureBlockDescription.ventureBlockDescription}
          image={involvedPage.ventureImage.fluid.src}
        />
        <ForInvestorBlock
          header={involvedPage.investorBlockHeading}
          description={involvedPage.investorBlockDescription.investorBlockDescription}
          image={involvedPage.investorImage.fluid.src} />
        <ForStudentBlock
          header={involvedPage.studentBlockHeading}
          description={involvedPage.studentBlockDescription.studentBlockDescription}
          image={involvedPage.studentImage.fluid.src} />
      </Layout>
    )
  }
}

export default GetInvolvedPage

export const pageQuery = graphql`
  query GetInvolvedQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInvolvedPage {
      headline
      ventureBlockHeading
      ventureBlockDescription {
        ventureBlockDescription
      }
      ventureImage {
        fluid (quality: 100){
          ...GatsbyContentfulFluid
        }
      }
      investorBlockHeading
      investorBlockDescription {
        investorBlockDescription
      }
      investorImage {
        fluid (quality: 100){
          ...GatsbyContentfulFluid
        }
      }
      studentBlockHeading
      studentBlockDescription {
        studentBlockDescription
      }
      studentImage {
        fluid (quality: 100){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`