import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import FaqQuestion from '../components/faq/question'
import Layout from '../components/layout'
import HeaderBar from '../components/base/header-bar'
import FaqBlock from '../components/faq/faq-block'
import FaqGrayBlock from '../components/faq/faq-gray-block'
import { LargeOverlayCTA , theme} from '../components/get-involved/involved-shared-components'
import { BaseMarginContainer } from '../components/base/base-components'
class FAQPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const faqPage = get(this,  'props.data.contentfulFaqPage')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <HeaderBar isTop title={faqPage.headline}/>
              <FaqBlock 
              title={faqPage.category1Label} 
              questions={faqPage.category1Questions}/>

              <FaqGrayBlock 
              title={faqPage.category2Label} 
              questions={faqPage.category2Questions}/>
              
              <FaqBlock 
              title={faqPage.category3Label} 
              questions={faqPage.category3Questions}/>
              <BaseMarginContainer>
              <LargeOverlayCTA header={faqPage.finalCTAHeader} description={faqPage.finalCTADescription} theme={theme.tealCTA} link='/get-involved' />
              </BaseMarginContainer>
            </Layout>
        )
    }
}

export default FAQPage

export const pageQuery = graphql`
  query FAQPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFaqPage {
        headline
        category1Label
        category1Questions {
          question
          answer {
            answer
          }
        }
        category2Label
        category2Questions {
          question
          answer {
            answer
          }
        }
        category3Label
        category3Questions {
          question
          answer {
            answer
          }
        }
        finalCTAHeader
        finalCTADescription
      }
  }
`