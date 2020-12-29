import React, { useState } from "react"
import styled from "styled-components"
import { BaseMarginContainer } from "../base/base-components"
import { device } from "../base/device"
import { HANh2 } from "../base/fonts"
import { yellow, lightGray, yellow30 } from "../base/colors"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"
import FaqQuestion from "./question"


export const FaqBlockContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: ${lightGray};
    padding: 0px ${DESKTOP_MARGIN} 25px ${DESKTOP_MARGIN};
    @media ${device.smLaptop} {
        padding: 0px ${LAPTOP_MARGIN} 25px ${LAPTOP_MARGIN};
    }

    @media ${device.tablet} {
        padding: 0px calc(${TABLET_MARGIN} + 75px) 25px calc(${TABLET_MARGIN} + 75px);
        width: auto;
    }

    @media ${device.mobile} {
        padding:  0px ${MOBILE_MARGIN} 25px ${MOBILE_MARGIN};
    }
`

export const FaqBlockInnerWidth = styled.div`
    width: 60vw;
    @media ${device.tablet} {
        width: auto;
    }
`

export const QuestionsContainer = styled.div`
    padding-left: 50px;
    border-left: ${yellow} 3px solid;
    margin-left: -50px;

    @media ${device.smLaptop} {
        margin-left: 0px;
    }


    @media ${device.mobile} {
        width: auto;
        padding-left: 0px;
        border-left: none;
    }
`

export const FaqHeaderContainer = styled.div`
    padding: 50px 0px;

`


const FaqGrayBlock = (props) => {
    const { title, questions, ...rest } = props;
    return <FaqBlockContainer>
        <FaqBlockInnerWidth>
        <FaqHeaderContainer>
        <HANh2>{title}</HANh2>
        </FaqHeaderContainer>
        <QuestionsContainer>
        {questions.map((question) => {
            return (
                <FaqQuestion faqQuestion={question} />
            )
        })}
        </QuestionsContainer>
        </FaqBlockInnerWidth>
    </FaqBlockContainer>
}

export default FaqGrayBlock

