import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import FaqQuestion from '../components/faq-question/faq-question'
import Layout from '../components/layout'
class FAQPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const faqPage = get(this,  'props.data.contentfulFaqPage')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <h1>{faqPage.headline}</h1>
              <div>{faqPage.category1Label}</div>
              <ul>
                  {faqPage.category1Questions.map((question) => {
                      return (
                          <li>
                              <FaqQuestion faqQuestion={question} />
                          </li>
                      )
                  })}
              </ul>
              <div>{faqPage.category2Label}</div>
              <ul>
                  {faqPage.category2Questions.map((question) => {
                      return (
                          <li>
                              <FaqQuestion faqQuestion={question} />
                          </li>
                      )
                  })}
              </ul>
              <div>{faqPage.category3Label}</div>
              <ul>
                  {faqPage.category3Questions.map((question) => {
                      return (
                          <li>
                              <FaqQuestion faqQuestion={question} />
                          </li>
                      )
                  })}
              </ul>
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
      }
  }
`