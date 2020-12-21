import React from 'react'
import { teal } from "../../base/colors"
import {
  MissionContainer,
  MissionH2,
  MissionHeaderBlock,
  TextBlock
} from './mission-statement-styles'
import {
  HANsubh2,
  HANSpecialBody
} from '../../base/fonts'

export default ({header, subheader, missionStatement}) => 
    <MissionContainer>
        <MissionHeaderBlock>
            <MissionH2>{header}</MissionH2>
        </MissionHeaderBlock>
        <TextBlock>
            <HANsubh2 color={teal}>{subheader}</HANsubh2>
            <HANSpecialBody>{missionStatement}</HANSpecialBody>
        </TextBlock>
    </MissionContainer>
