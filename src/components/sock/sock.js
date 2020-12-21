import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery } from 'gatsby'

export default () => (
    <StaticQuery query = { graphql`
    query SockQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
    }
    render={ data => (
        <div>
            {data.site.siteMetadata.title}
            I'm a cool sock!
        </div>
    )} />
)