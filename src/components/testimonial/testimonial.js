import React from 'react'

import styles from './testimonial.module.css'

export default ({ testimonial }) => (
  <div className={styles.preview}>
    <p>{testimonial.name}</p>
    <p>{testimonial.company}</p>
    <p>{testimonial.role}</p>
  </div>
)