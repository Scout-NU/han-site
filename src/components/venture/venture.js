import React from 'react'
import Img from 'gatsby-image'

import styles from './venture.module.css'

export default ({ venture }) => (
    <>
        {venture.name},
        {venture.website},
        {venture.year},
        {venture.description.description}
        <Img alt="" fluid={venture.logo.fluid} />
    </>
)