import React from "react"
import styled from "styled-components"
import { SecondaryButton } from "../base/base-components"
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANh2, HANh1 } from "../base/fonts"
import {
    DESKTOP_MARGIN,
    LAPTOP_MARGIN,
    TABLET_MARGIN,
    MOBILE_MARGIN
} from '../base/constants'


const PortfolioHeaderContainer = styled.div`
    margin: 160px 0px 85px;
    @media ${device.tablet} {
        margin: 160px 0px 65px;
    }
    @media ${device.mobile} {
        margin: 160px 0px 60px;
    }
    @media ${device.smMobile} {
        margin-bottom: 80px;
    }
`

export const PortfolioHeader = ({ headline, description }) => {
    return <>
        <PortfolioHeaderContainer>
            <HANh1>{headline}</HANh1>
            <HANbody>{description}</HANbody>
        </PortfolioHeaderContainer>
    </>
}

const PastVenturesContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const PastVenturesH2 = styled(HANh2)`
    flex: 1 1 100%;
`

const GoldBar = styled.div`
    position: absolute;
    top: 30px;
    right: -${DESKTOP_MARGIN};
    width: 70%;
    height: 4px;
    background-color: ${yellow};
    @media ${device.smLaptop} {
        right: -${LAPTOP_MARGIN};
        width: 50%;
    }
    @media ${device.tablet} {
        right: -${TABLET_MARGIN};
        top: 20px;
        height: 3px;
    }
    @media ${device.mobile} {
        right: -${MOBILE_MARGIN};
        width: 33%;
    }
    @media ${device.smMobile} {
        top: -20px;
        right: unset;
        left: 0px;
    }
`

export const PastVentures = ({ headline, ventures }) => {
    return <>
        <PastVenturesContainer>
            <PastVenturesH2>{headline}</PastVenturesH2>
            <GoldBar />
            {
                ventures.map(({ node }) => {
                    return (
                        <PortfolioVenture venture={node}></PortfolioVenture>
                    )
                })
            }
        </PastVenturesContainer>
    </>
}

const PortfolioVentureContainer = styled.div`
    width: 30%;
    margin: 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.mobile} {
        width: 45%;
        margin: 30px 0px;
    }
`

const VentureImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
    @media ${device.mobile} {
        height: 100px;
    }
`

export const PortfolioVenture = ({ venture }) => {
    return <>
        <PortfolioVentureContainer>
            <VentureImage src={venture.logo.fluid.src} />
            <a href={venture.website}>
                <SecondaryButton>{venture.name}</SecondaryButton>
            </a>
            <HANbody>{venture.shortTagline}</HANbody>
        </PortfolioVentureContainer>
    </>
}