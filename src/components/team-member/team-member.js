import React from 'react'
import Img from 'gatsby-image'
import styles from './team-member.module.css'


export default ({ teamMember }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={teamMember.profilePicture.fluid} />
    <p>{teamMember.name}</p>
    <p>{teamMember.title}</p>
  </div>
)