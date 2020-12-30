import React from "react"
import styled from "styled-components"
import { lightGray, yellow, black } from "../base/colors"
import { device } from "../base/device.js"
import { HANbody, HANh2, HANsubh3 } from "../base/fonts"
import { DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN, MOBILE_MARGIN } from "../base/constants"
import CheckmarkURL from '../../images/checkmark.svg';

export const RequirementsContainer = styled.div`
    position: relative;
    margin: 0px -${DESKTOP_MARGIN} 120px 0px;
    padding: 80px ${DESKTOP_MARGIN} 60px 0px;
    justify-content: space-between;
    display: flex;
    @media ${device.smLaptop} {
        margin-right: -${LAPTOP_MARGIN};
        padding: 80px ${LAPTOP_MARGIN} 60px 0px;
    }
    @media ${device.tablet} {
        margin: 0px -${TABLET_MARGIN} 100px 0px;
        padding: 40px ${TABLET_MARGIN} 40px 0px;
    }
    @media ${device.mobile} {
        flex-direction: column;
        margin: 0px -${MOBILE_MARGIN} 60px -${MOBILE_MARGIN};
        padding: 0px ${MOBILE_MARGIN} 50px ${MOBILE_MARGIN};
    }
`

export const GrayBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 70vw;
    height: 100%;
    z-index: -1;
    background-color: ${lightGray};
    @media ${device.mobile} {
        top: 18px;
        left: 0;
        width: 100%;
        height: 90%;
    }
`

export const HeaderContainer = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    @media ${device.tablet} {
        padding-right: 25px;
    }
    @media ${device.mobile} {
        padding-bottom: 10px;
    }
`

export const ListContainer = styled(HeaderContainer)`
    flex: 1 1 50%;
    height: 330px;
    display: flex;
    justify-content: space-between;
    border-left: 4px solid ${yellow};
    @media ${device.tablet} {
        height: 215px;
        border-left: 3px solid ${yellow};
    }
    @media ${device.mobile} {
        border-left: none;
        border-top: 3px solid ${yellow};
        padding-top: 25px;
        height: 180px;
    }
`

export const Checkmark = styled.img`
    width: 30px;
    margin: 0px 35px;
    @media ${device.tablet} {
        width: 15px;
        margin: 0px 25px;
    }
    @media ${device.mobile} {
        margin: 0px 20px;
    }
`

export const Requirement = styled.div`
    display: flex;
    align-items: baseline;
`

export const RequirementText = styled.div`
    flex: 1 1 50%;
    width: 50%;
`

export const RequirementsBlock = ({ header, description, requirements }) => {
    return <>
        <RequirementsContainer>
            <HeaderContainer>
                <HANh2>{header}</HANh2>
                <HANbody>{description}</HANbody>
            </HeaderContainer>
            <GrayBox />
            <ListContainer>
                {
                    requirements.map(item =>
                        <Requirement>
                            <Checkmark src={CheckmarkURL} />
                            <RequirementText>
                                <HANsubh3 color={black}>
                                    {item.value.value}
                                </HANsubh3>
                            </RequirementText>
                        </Requirement>
                    )
                }
            </ListContainer>
        </RequirementsContainer>
    </>
}