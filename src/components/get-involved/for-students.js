import React from "react"
import styled from "styled-components"
import { lightGray, yellow } from "../base/colors"
import { DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN, MOBILE_MARGIN } from "../base/constants"
import { HANbody, HANh2 } from "../base/fonts"
import { device } from "../base/device.js"

export const RequirementsContainer = styled.div`
    margin: 0px 0px 120px -${DESKTOP_MARGIN};
    padding: 80px 70px 60px ${DESKTOP_MARGIN};
    justify-content: space-between;
    background-color: ${lightGray};
    display: flex;
    @media ${device.smLaptop} {
        margin-left: -${LAPTOP_MARGIN};
        padding: 80px 70px 60px ${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        margin: 0px 0px 100px -${TABLET_MARGIN};
        padding: 65px ${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        margin: 0px -${MOBILE_MARGIN} 60px -${MOBILE_MARGIN};
        padding: 50px ${MOBILE_MARGIN} 60px ${MOBILE_MARGIN};
    }
`

export const HeaderContainer = styled.div`
    flex: 1 1 50%;
    display: flex;
    padding-right: 30px;
    justify-content: center;
    @media ${device.tablet} {
        padding-right: 15px;
    }
    @media ${device.mobile} {
        justify-content: start;
        padding-bottom: 25px;
    }
`

export const DescriptionContainer = styled(HeaderContainer)`
    flex: 1 1 50%;
    border-left: 4px solid ${yellow};
    padding-left: 30px;
    padding-bottom: 60px;
    @media ${device.tablet} {
        padding-bottom: 0;
    }
    @media ${device.mobile} {
        border-left: none;
        border-top: 2px solid ${yellow};
        padding-left: 0;
        padding-top: 25px;
    }
`

export const RequirementsBlock = ({ header, description }) => {
    return <>
        <RequirementsContainer>
            <HeaderContainer>
                <HANh2>{header}</HANh2>
            </HeaderContainer>
            <DescriptionContainer>
                <HANbody>{description}</HANbody>
            </DescriptionContainer>
        </RequirementsContainer>
    </>
}