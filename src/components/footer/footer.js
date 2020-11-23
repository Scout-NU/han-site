import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'
import { StaticQuery } from 'gatsby'

export default () => (
    <StaticQuery query = { graphql`
    query FooterQuery {
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
            I'm a cooler footer!
        </div>
    )} />
)