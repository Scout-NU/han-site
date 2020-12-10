import styled from "styled-components"
import { lightGray, yellow } from "../base/colors"
import { device } from "../base/device.js"
import {
    HANh2,
  } from '../base/fonts'
import {
    DESKTOP_MARGIN,
    TABLET_MARGIN,
    MOBILE_MARGIN
} from '../base/constants'

export const MissionContainer = styled.div`
    background-color: ${lightGray};
    display: flex;
    padding: ${DESKTOP_MARGIN}px;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;
    @media ${device.tablet} {
        padding: ${TABLET_MARGIN}px;
    }
    @media ${device.mobile} {
        padding: ${MOBILE_MARGIN}px;
        flex-direction: column;
    }
`

export const MissionHeaderBlock = styled.div`
    width: 30%;
    @media ${device.mobile} {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 35px;
    }
`

export const MissionH2 = styled(HANh2)`
    text-transform: uppercase;
`

export const TextBlock = styled.div`
    width: 70%;
    @media ${device.mobile} {
        width: 100%;
        padding-top: 35px;
        padding-bottom: 10px;
        
    }
`

export const GoldBar = styled.div`
    transform: rotate(90deg);
    width: 50vh;
    height: 4px;
    align-self: center;
    display: block;
    background-color: ${yellow};
    overflow: hidden;
    @media ${device.mobile} {
        transform: none;
        width: 100%;
        height: 3px;
    }
`

export default {
    MissionContainer, MissionHeaderBlock, TextBlock, GoldBar
}