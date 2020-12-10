import React from 'react'
import { teal } from "../base/colors"
import {
  HeroContainer,
  HeroImage,
  GrayBlock,
  HANBoldText,
  TextContainer,
  GoldBar,
  BlockContainer
} from './hero-styles'
import {
  HANh1,
  HANSpecialBody
} from '../base/fonts'

export default ({ headline, tagline, heroImage }) => (

  <HeroContainer>
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
  </HeroContainer>

  

)
