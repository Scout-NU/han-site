import styled from "styled-components"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { yellow, teal } from "../base/colors"
import { HANsubh3 } from '../base/fonts'
import { device } from "../base/device.js"
import { DESKTOP_MARGIN, TABLET_MARGIN } from "../base/constants"

export const StatisticsBlock = styled(BaseMarginContainer)`
    margin-top: 100px;
    margin-bottom: 100px;
    flex: nowrap;
    @media ${device.tablet} {
        margin-top: 80px;
        margin-bottom: 80px;
    }
    @media ${device.mobile} {
        margin-top: 60px;
        margin-bottom: 60px;
    }
`

export const FirstLineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${device.mobile} {
        margin-bottom: 30px;
        Button {
            display: none;
        }
    }
`

// needs to be a component in this class so it can be shown/hidden in different divs depending on screen size
export const Button = styled(SecondaryButton)`
`

export const StatsHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    margin-left: -${DESKTOP_MARGIN};
    margin-right: 0px;
    @media ${device.tablet} {
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 0;
        align-items: start;
    }
`

export const GoldBar = styled.div`
    height: 7px;
    width: 200px;
    margin-right: 6px;
    background-color: ${yellow};
    @media ${device.tablet} {
        margin-left: -${TABLET_MARGIN};
        margin-bottom: 24px;
    }
    @media ${device.mobile} {
        display: none;
    }
`

export const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.mobile} {
        flex-direction: row;
        align-items: baseline;
        border-left: 5px solid ${yellow};
        padding-left: 36px;
        width: 100%;
    }
`

export const StatNumber = styled.p`
    font-weight: bold;
    font-size: 120px;
    margin: 0;
    color: ${teal};
    font-family: "URW DIN", sans-serif;
    @media ${device.tablet} {
        font-size: 84px;
    }
    @media ${device.mobile} {
        font-size: 64px;
    }
`

export const StatDescription = styled(HANsubh3)`
    vertical-align: center;
    @media ${device.mobile} {
        margin-left: 10px;
    }
`

export const StatsOuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media ${device.mobile} {
        flex-direction: column;
    }
`

export const MobileButtonDiv = styled.div`
    display: none;
    @media ${device.mobile} {
        display: flex;
        margin-top: 30px;
    }
`



