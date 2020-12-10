import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import TeamMember from '../../components/team-member/team-member'

class OurTeamPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const teamPage = get(this,  'props.data.contentfulTeamPage')
        const teamMembers = get(this,  'props.data.contentfulTeamPage.teamMembers')

        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <div className="wrapper">
                <h1>{teamPage.teamHeadline}</h1>
                <div>
                  {
                    teamMembers.map(teamMember => 
                      <div className="col-sm-6 col-md-4">
                        <TeamMember key={teamMember.name} teamMember={teamMember}/>
                      </div>
                      )
                  }
                </div>
              </div>
            </Layout>
        )
    }
}

export default OurTeamPage

export const pageQuery = graphql`
  query OurTeamQuery {
    contentfulTeamPage {
      teamHeadline
      teamMembers {
        name
        title
        bio
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