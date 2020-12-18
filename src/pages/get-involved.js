import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import HeaderBar from '../components/headers/header-bar'
import ForVentureBlock from '../components/get-involved-overview/for-venture-block'
import ForStudentBlock from '../components/get-involved-overview/for-students-block'
class GetInvolvedPage extends React.Component {
    render(){
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const involvedPage = get(this, 'props.data.contentfulInvolvedPage');

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <HeaderBar isSide title={involvedPage.headline}/>
              <ForVentureBlock/>
              <ForStudentBlock/>
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
      investorBlockHeading
      investorBlockDescription {
        investorBlockDescription
      }
      studentBlockHeading
      studentBlockDescription {
        studentBlockDescription
      }
    }
  }
`