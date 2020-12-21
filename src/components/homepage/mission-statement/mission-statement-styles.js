import styled from "styled-components"
import { lightGray, yellow } from "../../base/colors"
import { device } from "../../base/device.js"
import { HANh2 } from '../../base/fonts'
import {
    DESKTOP_MARGIN,
    LAPTOP_MARGIN,
    TABLET_MARGIN,
    MOBILE_MARGIN
} from '../../base/constants'

export const MissionContainer = styled.div`
    background-color: ${lightGray};
    display: flex;
    padding-left: ${DESKTOP_MARGIN};
    padding-right: ${DESKTOP_MARGIN};
    padding-top: 100px;
    padding-bottom: 100px;
    align-items: flex-start;
    justify-content: space-around;
    overflow: auto;
    @media ${device.smLaptop} {
        padding: ${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        padding: ${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        padding: ${MOBILE_MARGIN};
        flex-direction: column;
    }
`

export const MissionHeaderBlock = styled.div`
    padding-right: 5%;
    @media ${device.mobile} {
        width: 100%;
        padding-right: 0;
        padding-top: 10px;
        padding-bottom: 35px;
    }
`

export const MissionH2 = styled(HANh2)`
    text-transform: uppercase;
`

export const TextBlock = styled.div`
    border-left: 4px solid ${yellow};
    padding-left: 5%;
    @media ${device.tablet} {
        border-left: 3px solid ${yellow};
    }
    @media ${device.mobile} {
        width: 100%;
        border-left: none;
        border-top: 3px solid ${yellow};
        padding-left: 0;
        padding-top: 35px;
        padding-bottom: 10px;
        
    }
`

export default {
    MissionContainer, MissionHeaderBlock, TextBlock
}