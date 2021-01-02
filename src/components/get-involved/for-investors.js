import React from "react"
import styled from "styled-components"
import { DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN, MOBILE_MARGIN } from "../base/constants"
import { HANh1, HANh2, HANh3, HANbody } from "../base/fonts"
import { lightGray, teal, yellow, yellow70 } from "../base/colors"
import { device } from "../base/device.js"
import { FullWidthFlexRow } from "./involved-shared-components"

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    padding: -${DESKTOP_MARGIN};
    height: 80vh;
`

export const HeroImage = styled.img`
    position: absolute;
    width: 68%;
    height: 70%;
    object-fit: cover;
    bottom: 0;
    left: -${DESKTOP_MARGIN};
    @media ${device.smLaptop} {
        left: -${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        left: -${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        left: -${MOBILE_MARGIN};
        width: 100%;
        height: 55%;
    }
`

export const GoldBlock = styled.div`
    position: absolute;
    width: 70%;
    top: 74px;
    right: -106px;
    padding: 60px;
    background-color: ${yellow70};
    @media ${device.smLaptop} {
        right: -${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        right: -${TABLET_MARGIN};
        top: 35px;
        padding: 60px 40px 60px 60px;
    }
    @media ${device.mobile} {
        right: -${MOBILE_MARGIN};
        top: 0;
        width: 100%;
        padding: 55px 30px;
    }
    @media (max-width: 400px) {
        padding: 55px 20px;
    }
`

export const TealBar = styled.div`
    position: absolute;
    top: 250px;
    right: -${DESKTOP_MARGIN};
    width: 40%;
    height: 7px;
    background-color: ${teal};
    @media ${device.desktop} {
        width: 32%;
    }
    @media ${device.smLaptop} {
        width: 20%;
        right: -${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        width: 25%;
        top: 400px;
        right: -${TABLET_MARGIN};
    }
    @media (max-width: 900px) {
        top: 425px;
    }
    @media ${device.mobile} {
        height: 4px;
        width: 30%;
        right: -${MOBILE_MARGIN};
    }
    @media (max-width: 375px) {
        top: 450px;
    }
`

export const HeroTextBox = styled.div`
    width: 80%;
    max-width: 500px;
    min-width: 400px;
    @media ${device.tablet} {
        width: 100%;
        min-width: 350px;
    }
    @media ${device.mobile} {
        min-width: unset;
    }
`

export const Hero = ({ image, headline, description }) => {
    return <>
        <HeroContainer>
            <HeroImage src={image.fluid.src}></HeroImage>
            <GoldBlock>
                <HeroTextBox>
                    <HANh1>{headline}</HANh1>
                    <HANbody>{description}</HANbody>
                </HeroTextBox>
            </GoldBlock>
            <TealBar />
        </HeroContainer>
    </>
}

export const BenefitsContainer = styled.div`
    background-color: ${lightGray};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -${DESKTOP_MARGIN};
    padding: 90px ${DESKTOP_MARGIN} 80px ${DESKTOP_MARGIN};
    width: 100vw;
    @media ${device.smLaptop} {
        margin: 0 -${LAPTOP_MARGIN} 0 -${LAPTOP_MARGIN};
        padding: 90px ${LAPTOP_MARGIN} 80px ${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        margin: 0 -${TABLET_MARGIN} 0 -${TABLET_MARGIN};
        padding: 80px ${TABLET_MARGIN} 60px ${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        margin: 0 -${MOBILE_MARGIN} 0 -${MOBILE_MARGIN};
        padding: 80px ${MOBILE_MARGIN} 40px ${MOBILE_MARGIN};
        flex-direction: column;
    }
`

export const GoldBar = styled.div`
    width: 25vw;
    height: 5px;
    margin-bottom: 30px;
    margin-left: -${DESKTOP_MARGIN};
    background-color: ${yellow};
    @media ${device.smLaptop} {
        margin-left: -${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        margin-left: -${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        width: 45vw;
        margin-left: -${MOBILE_MARGIN};
        margin-bottom: 20px;
    }
`

export const BenefitFlexRow = styled.div`
    width: 45%;
    @media ${device.mobile} {
        width: 100%;
        margin-bottom: 50px;
    }
`

export const BenefitsH2 = styled(HANh2)`
    margin-bottom: 45px;
    @media ${device.tablet} {
        margin-bottom: 35px;
    }
`

export const BenefitsBlock = ({ header, benefitsList }) => {
    return <>
        <BenefitsContainer>
            <GoldBar />
            <FullWidthFlexRow>
                <BenefitsH2>{header}</BenefitsH2>
            </FullWidthFlexRow>
            {
                benefitsList.map(benefit =>
                    <BenefitFlexRow key={benefit.key}>
                        <HANh3 color={teal}>{benefit.key}</HANh3>
                        <HANbody>{benefit.value.value}</HANbody>
                    </BenefitFlexRow>
                )
            }
        </BenefitsContainer>
    </>
}