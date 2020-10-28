import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './testimonial.module.css'

export default ({ testimonial }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={testimonial.profilePicture.fluid} src={testimonial.profilePicture.fluid.src} />
    <h3 className={styles.previewTitle}></h3>
    <div class={styles.name}> 
        {testimonial.name}
    </div>
    <div class="body"> 
        {testimonial.testimonial.testimonial}
    </div>
    <div>
        {testimonial.role}
    </div>
  </div>
)
