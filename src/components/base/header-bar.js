import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "./colors"
import { device } from "./device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh2 } from "./fonts"
import { BaseMarginContainer, SecondaryButton } from "./base-components"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "./constants"


export const TitleContainer = styled(BaseMarginContainer)`
    padding-top: ${props => (props.display ? "150px" : "100px")};
    margin-bottom: 50px;
    position: relative;
    width: 45%;

    @media ${device.smLaptop} {
        width: 50%;
    }

    @media ${device.tablet} {
        width: 70%;
    }

    @media ${device.mobile} {
        width: auto;
        padding-top: 50px;
        margin-bottom: ${props => (props.display ? "100px" : "0px")};
    }
`

export const HeaderDescription = styled(HANbody)`
    padding: 10px 0px;
`

export const SideGoldBar = styled.div`
    display: ${props => (props.display ? "block" : "none")};
    width: calc(${DESKTOP_MARGIN} - 40px);
    height: 4px;
    background-color: ${yellow};
    position: relative;
    left: -${DESKTOP_MARGIN};
    top: 45px;


    @media ${device.smLaptop} {
        width: calc(${LAPTOP_MARGIN} - 20px);
        left: -${LAPTOP_MARGIN};
    }

    @media ${device.tablet} {
        width: 25vw;
        top: -10px;
        left: -${TABLET_MARGIN};
    }

    @media ${device.mobile} {
        width: 45vw;
        left: -${MOBILE_MARGIN};
    }
`

export const TopGoldBar = styled.div`
    display: ${props => (props.display ? "block" : "none")};
    margin-bottom: 10px;
    background-color: ${yellow};
    height: 4px;
    width: 150px;
`

export const GrayBlock = styled.div`
    :after {
        display:  ${props => (props.display ? "block" : "none")};
        content:"";
        position: absolute;
        width: 80%;
        height: 80%;
        background-color:rgba(0, 0, 0, .1);
        left: -${DESKTOP_MARGIN};
        top: 100px;
        z-index:-1;

        @media ${device.smLaptop} {
            left: -${LAPTOP_MARGIN};
        }

        @media ${device.tablet} {
            width: 80%;
            left: -${TABLET_MARGIN};
        }

        @media ${device.mobile} {
            width: 100vw;
            height: 120%;
            top: 0;
            left: -${MOBILE_MARGIN};
        }
    }
`

const HeaderBar = (props) => {
    const { title, body, isTop, isSide, grayBackground, ...rest } = props;
    return <TitleContainer display={grayBackground}>
        <GrayBlock display={grayBackground}>
        <TopGoldBar display={isTop}/>
        <SideGoldBar display={isSide}/>
        <HANh1>{title}</HANh1>
        <HeaderDescription>
            {body}
        </HeaderDescription>

        </GrayBlock>
    </TitleContainer>  
}

export default HeaderBar