import React, { useState } from "react"
import styled from "styled-components"
import { BaseMarginContainer } from "../base/base-components"
import { device } from "../base/device"
import { HANh2 } from "../base/fonts"
import { yellow, lightGray } from "../base/colors"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"
import FaqQuestion from "./question"


export const FaqBlockContainer = styled(BaseMarginContainer)`
    position: relative;
    width: 60vw;
    @media ${device.tablet} {
        padding: 0px 75px;
        width: auto;
    }

    @media ${device.mobile} {
        padding:  0px;
    }
`

export const FaqHeaderContainer = styled.div`
    padding: 50px 0px;

`
export const SideGoldBar = styled.div`
    width: calc(${DESKTOP_MARGIN} - 40px);
    height: 4px;
    background-color: ${yellow};
    position: relative;
    left: -${DESKTOP_MARGIN};
    top: 35px;

    @media ${device.smLaptop} {
        width: calc(${LAPTOP_MARGIN} - 20px);
        left: -${LAPTOP_MARGIN};
    }

    @media ${device.tablet} {
        top: 25px;
        width: calc(${TABLET_MARGIN} + 50px);
        left: calc(-${TABLET_MARGIN} - 75px);
    }

    @media ${device.mobile} {
        width: 0;
        left: -${MOBILE_MARGIN};
    }
`


const FaqBlock = (props) => {
    const { title, questions, ...rest } = props;
    return <FaqBlockContainer>
        <FaqHeaderContainer>
        <SideGoldBar/>
        <HANh2>{title}</HANh2>
        </FaqHeaderContainer>
        {questions.map((question) => {
            return (
                <FaqQuestion faqQuestion={question} />
            )
        })}
    </FaqBlockContainer>
}

export default FaqBlock

