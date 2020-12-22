import React from "react"
import styled from "styled-components"
import { device } from "../base/device"
import { BaseMarginContainer } from "../base/base-components"
import { MOBILE_MARGIN } from "../base/constants"
import { HANh2 } from "../base/fonts"

export const InvolvedBlockContainer = styled(BaseMarginContainer)`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    margin-top: 100px;
    margin-bottom: 100px;
    min-height: 60vh;


    @media ${device.mobile} {
        height: fit-content;
        flex-flow: column wrap;
        margin: 50px 0px;
        padding: 0px ${MOBILE_MARGIN};
    }
`


export const InvolvedPicture = styled.img`
    flex: 1 1 50%;
    max-height: 450px;
    width: 50%;
    object-fit: cover;
    max-height: -moz-available;          /* WebKit-based browsers will ignore this. */
    max-height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    max-height: fill-available;

    @media ${device.mobile} {
        width: 100%;
    }
`

export const InvolvedTextContainer = styled.div`
    flex: 1 1 50%;
    align-self: flex-start;
    position: relative;
    padding: 40px;

    @media ${device.mobile} {
        width: 100vw;
        left: -${MOBILE_MARGIN};
    }
`

export const InvolvedHeader = styled(HANh2) `
    max-width: 500px;
`