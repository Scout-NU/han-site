import React from 'react'
import {Link} from 'gatsby'

import styles from './alumni.module.css'

export default ({ alumni }) => (
  <div className={styles.preview}>
    <p>{alumni.name}</p>
    <p>{alumni.yearInHan}</p>
    <p>Currently at 
     <Link to={alumni.currentCompanyLink}>{alumni.currentCompany}</Link>
      </p>
  </div>
)

