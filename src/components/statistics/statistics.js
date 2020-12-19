import React from 'react'
import {
  StatNumber,
  StatsOuterContainer,
  StatDescription,
  StatisticsBlock,
  GoldBar,
  StatContainer,
  StatsHeaderContainer,
  FirstLineContainer,
  MobileButtonDiv,
  DummyContainer,
  Button
} from './statistics-styles'
import {
  HANh2,
} from '../base/fonts'
import { Link } from 'gatsby'

export default ({ statsHeader, stats, statsButtonLabel }) => (
  <StatisticsBlock>
    {/* <FirstLineContainer> */}
      <StatsHeaderContainer>
        <GoldBar></GoldBar>
        <HANh2>{statsHeader}</HANh2>
      </StatsHeaderContainer>
      <DummyContainer>
      <Link to="/portfolio">
        <Button>{statsButtonLabel}</Button>
      </Link>
      </DummyContainer>
    {/* </FirstLineContainer> */}
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
    <MobileButtonDiv>
      <Link to="/portfolio">
        <Button>{statsButtonLabel}</Button>
      </Link>
    </MobileButtonDiv>
  </StatisticsBlock>
)