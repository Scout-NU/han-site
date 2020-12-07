import React from 'react'
import Img from 'gatsby-image'
import { teal, yellow } from "../base/colors"
import {
  HeroContainer,
  HeroGrid,
  HeroImage,
  GrayBlock,
  HANBoldText,
  HANBoldContainer,
  TextContainer,
  GoldBar,
  BlockContainer
} from './hero-styles'
import {
  HANh1,
  HANSpecialBody
} from '../base/fonts'

import styles from './hero.module.css'

export default ({ headline, tagline, heroImage }) => (

  <HeroGrid>
    <HeroImage src={heroImage.fluid.src} />
    <BlockContainer>
    <GrayBlock>
      <TextContainer>
        <HANh1 color={teal}>{headline}</HANh1>
        <HANSpecialBody>{tagline}</HANSpecialBody>
      </TextContainer>
    </GrayBlock>
    <GoldBar/>
    </BlockContainer>
      <HANBoldText>HAN</HANBoldText>
  </HeroGrid>
)
