import React from 'react'

import styles from './venture.module.css'

export default ({ venture }) => (
    <div>
        {venture.name},
        {venture.website},
        {venture.year},
        {venture.description.description}
        <img src={venture.logo.file.url} />
    </div>
)