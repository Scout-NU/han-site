import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import TeamMember, { OurTeamContainer } from '../../components/people/team-member'
import HeaderBar from '../../components/base/header-bar'
import { BaseMarginContainer } from '../../components/base/base-components'


class OurTeamPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const teamPage = get(this,  'props.data.contentfulTeamPage')
        const teamMembers = get(this,  'props.data.contentfulTeamPage.teamMembers')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
               <HeaderBar isTop title={teamPage.teamHeadline} body={teamPage.shortDescription.shortDescription}/>
               <OurTeamContainer>
               {teamMembers.map(teamMember => 
                        <TeamMember key={teamMember.name} teamMember={teamMember}/>
                      )
                  }
               </OurTeamContainer>
            </Layout>
        )
    }
}

export default OurTeamPage

export const pageQuery = graphql`
  query OurTeamQuery {
    contentfulTeamPage {
      teamHeadline
      shortDescription {
        shortDescription
      }
      teamMembers {
        name
        title
        bio {
          bio
        }
        linkedIn
        profilePicture {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        alternateProfilePicture {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  
`