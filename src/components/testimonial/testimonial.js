import React from 'react'

import styles from './testimonial.module.css'

export default ({ testimonial }) => (
  <div className={styles.preview}>
    <p>{testimonial.name}</p>
    <p>{testimonial.company}</p>
<<<<<<< HEAD
    <p>{testimonial.testimonial.testimonial}</p>
    
=======
>>>>>>> 389caee35dd3da370de5ce7f5b0a6bb8a219a273
  </div>
)