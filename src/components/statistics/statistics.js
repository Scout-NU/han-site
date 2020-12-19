import React from 'react'
import {
  StatNumber,
  StatDescription,
  GoldBar,
  StatContainer
} from './statistics-styles'
import {
  HANh2,
  HANsubh3
} from '../base/fonts'
import {
  SecondaryButton
} from '../base/base-components'

export default ({ statsHeader, stats, statsButtonLabel }) => (
  <div>
    <HANh2>{statsHeader}</HANh2>
    <SecondaryButton>{statsButtonLabel}</SecondaryButton>
    {
      stats.map(stat =>
        <StatContainer>
          <StatNumber>{stat.number}</StatNumber>
          <HANsubh3>{stat.description}</HANsubh3>
        </StatContainer>
      )
    }
  </div>
)