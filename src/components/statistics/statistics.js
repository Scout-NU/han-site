import React from 'react'
import {
  StatNumber,
  StatsOuterContainer,
  StatDescription,
  StatisticsBlock,
  GoldBar,
  StatContainer,
  StatsHeaderContainer,
  ButtonContainer
} from './statistics-styles'
import { HANh2 } from '../base/fonts'
import { SecondaryButton } from "../base/base-components"
import { Link } from 'gatsby'

export default ({ statsHeader, stats, statsButtonLabel }) => (
  <StatisticsBlock>
      <StatsHeaderContainer>
        <GoldBar/>
        <HANh2>{statsHeader}</HANh2>
      </StatsHeaderContainer>
      <ButtonContainer>
      <Link to="/portfolio">
        <SecondaryButton>{statsButtonLabel}</SecondaryButton>
      </Link>
      </ButtonContainer>
    <StatsOuterContainer>
      {
        stats.map(stat =>
          <StatContainer>
            <StatNumber>{stat.number}</StatNumber>
            <StatDescription>{stat.description}</StatDescription>
          </StatContainer>
        )
      }
    </StatsOuterContainer>
  </StatisticsBlock>
)