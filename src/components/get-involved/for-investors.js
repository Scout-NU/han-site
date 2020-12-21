import React from "react"
import styled from "styled-components"
import { DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN, MOBILE_MARGIN } from "../base/constants"
import { HANsubh3, HANh2, HANh3, HANbody } from "../base/fonts"
import { lightGray, darkGray, teal, yellow } from "../base/colors"
import { device } from "../base/device.js"
import { FullWidthFlexRow } from "./involved-shared-components"

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    padding: -${DESKTOP_MARGIN};
    height: 70vh;
`

export const HeroImage = styled.img`
    position: absolute;
    width: 70%;
    bottom: 0;
    left: -${DESKTOP_MARGIN};
    top: 156;
    @media ${device.smLaptop} {
        left: -${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        left: -${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        left: -${MOBILE_MARGIN};
    }
`

export const GoldBlock = styled.div`
    position: absolute;
    width: 70%;
    height: 500px;
    top: 74px;
    right: -106px;
    opacity: 70%;
    background-color: ${yellow};
    @media ${device.smLaptop} {
    }
    @media ${device.tablet} {
        right: 0;
    }
    @media ${device.mobile} {
        right: 0;
    }
`



export const Hero = ({ image, headline, description }) => {
    return <>
        <HeroContainer>
            <HeroImage src={image.fluid.src}></HeroImage>
            <GoldBlock></GoldBlock>
        </HeroContainer>

        <h1>{headline}</h1>
        <p>{description}</p>
        <img src={image.fluid.src}></img>
    </>
}

export const BenefitsContainer = styled.div`
    background-color: ${lightGray};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -${DESKTOP_MARGIN} 0 -${DESKTOP_MARGIN};
    padding: 0 ${DESKTOP_MARGIN} 0 ${DESKTOP_MARGIN};
    width: 100vw;
    @media ${device.smLaptop} {
        margin: 0 -${LAPTOP_MARGIN} 0 -${LAPTOP_MARGIN};
        padding: 0 ${LAPTOP_MARGIN} 0 ${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        margin: 0 -${TABLET_MARGIN} 0 -${TABLET_MARGIN};
        padding: 0 ${TABLET_MARGIN} 0 ${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        margin: 0 -${MOBILE_MARGIN} 0 -${MOBILE_MARGIN};
        padding: 0 ${MOBILE_MARGIN} 0 ${MOBILE_MARGIN};
    }
`

export const GoldBar = styled.div`
    width: 25vw;
    height: 5px;
    margin-left: -${DESKTOP_MARGIN};
    background-color: ${yellow};
`

export const FortyPercentWidthFlexRow = styled.div`
    flex: 1 1 50%;
`

export const BenefitsBlock = ({ header, benefitsList }) => {
    return <>
        <BenefitsContainer>
            <GoldBar/>
            <FullWidthFlexRow>
                <HANh2>{header}</HANh2>
            </FullWidthFlexRow>
            {
                benefitsList.map(benefit =>
                    <FortyPercentWidthFlexRow key={benefit.key}>
                        <HANh3 color={teal}>{benefit.key}</HANh3>
                        <HANbody>{benefit.value.value}</HANbody>
                    </FortyPercentWidthFlexRow>)
            }
        </BenefitsContainer>
    </>
}