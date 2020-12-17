import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { MOBILE_MARGIN, DESKTOP_MARGIN } from "../base/constants"


export const TitleContainer = styled(BaseMarginContainer)`

`

export const GoldBar = styled.div`
    width: calc(${DESKTOP_MARGIN} - 40px);
    height: 4px;
    background-color: ${yellow};
    position: relative;
    left: -${DESKTOP_MARGIN};
    top: -50px;

    @media ${device.mobile} {
        width: 75vw;
        top: 0px;
        right: -${MOBILE_MARGIN};
    }
`



const HeaderBar = () => {
    return <TitleContainer>
        <HANh1>TEXTY TEXT TEXT</HANh1>
        <GoldBar/>
    </TitleContainer>  
}


export default HeaderBar