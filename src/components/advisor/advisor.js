import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

import styles from './advisor.module.css'

export default ({ advisor }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={advisor.profilePicture.fluid}/>
    <p>{advisor.name}</p>
    <p>{advisor.bio.bio}</p>
    <Link to={advisor.linkedIn}>LinkedIn</Link>
  </div>
)