import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { yellow, yellow70, navy, white, teal, lightGray, lightGray90 } from "../base/colors"
import { HANh1, HANsubh3, HANh2, HANh3, HANbody } from "../base/fonts"
import ArrowIconSVG from "../../images/arrowIcon"
import { device } from "../base/device.js"
import { DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN, MOBILE_MARGIN } from "../base/constants"

export const theme = {
    yellowCTA: {
        backgroundColor: yellow,
        textColor: navy,
        accentColor: teal
    },
    tealCTA: {
        backgroundColor: teal,
        textColor: white,
        accentColor: yellow
    }
}

export const LargeCTABlock = styled.div`
    position: absolute;
    bottom: 0;
    left: 5%;
    right: 5%;
    display: flex;
    align-items: center;
    z-index: 2;
    width: 90%;
    height: 87%;
    max-height: 250px;
    background-color: ${props => (props.theme ? props.theme.backgroundColor : yellow)};
    @media ${device.mobile} {
        height: 93%;
    }
 `

export const SquareBlock = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 40%;
    height: 90%;
    background-color: ${props => (props.theme ? props.theme.backgroundColor : yellow)};
    opacity: 30%;
    @media ${device.smLaptop} {
        width: 50%;
    }
    @media ${device.mobile} {
        width: 90%;
    }
`

export const LargeCTAContainer = styled.div`
    position: relative;
    margin: 120px auto;
    width: 80%;
    height: 36vh;
    min-height: 120px;
    max-height: 290px;
    @media ${device.tablet} {
        height: 25vh;
        margin: 100px auto;
    }
    @media ${device.mobile} {
        max-height: 190px;
        width: 100%;
        margin: 60px 0px;
    }
`

export const LargeCTATextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 35px;
    margin: auto auto auto 100px;
    border-left: 4px solid ${props => (props.theme ? props.theme.accentColor : navy)};
    text-color: ${props => (props.theme ? props.theme.textColor : navy)};
    svg {
        margin-left: 15px;
        width: 90px;
        height: 60px;
    }
    @media ${device.tablet} {
        margin-left: 60px;
        padding-left: 30px;
    }
    @media ${device.mobile} {
        margin-left: 30px;
        padding-left: 20px;
        border-left: 2px solid ${props => (props.theme ? props.theme.accentColor : navy)};
        svg {
            margin-left: 15px;
            width: 60px;
            height: 40px;
        }
    }
`
export const FullWidthFlexRow = styled.div`
    flex: 1 1 100%;
`

export const CTALabel = styled(HANsubh3)`
    color: ${props => (props.theme ? props.theme.textColor : navy)};
    @media ${device.mobile} {
        margin: 0;
    }
`

export const LargeCTA = ({ header, label, link, theme }) => {
    return <>
        <Link to={link}>
            <LargeCTAContainer>
                <SquareBlock theme={theme} />
                <LargeCTABlock theme={theme}>
                    <LargeCTATextContainer theme={theme}>
                        <FullWidthFlexRow>
                            <CTALabel theme={theme}>{header}</CTALabel>
                        </FullWidthFlexRow>
                        <HANh2 color={theme.textColor}>{label}</HANh2>
                        <ArrowIconSVG color={theme.accentColor} />
                    </LargeCTATextContainer>
                </LargeCTABlock>
            </LargeCTAContainer>
        </Link>
    </>
}

export const OverlayCTAContainer = styled.div`
    position: relative;
    width: 100%;
    height: 40vh;
    margin: 140px auto;
    @media ${device.mobile} {
        height: 35vh;
        margin: 100px auto;
    }
    @media ${device.mobile} {
        height: 25vh;
        margin: 60px auto;
    }
`

export const OverlayCTABlock = styled(LargeCTABlock)`
    width: 90%;
    height: 80%;
    top: 8%;
    left: 3%;
    max-height: 325px;
    min-height: 170px;
    @media ${device.tablet} {
        height: 80%;
        top: 8%;
    }
`

export const OverlaySquareBlock = styled(SquareBlock)`
    height: 80%;
`

export const AccentBlock = styled.div`
    position: absolute;
    background-color: ${props => (props.theme ? props.theme.accentColor : teal)};
    width: 12.5%;
    height: 50%;
    bottom: 0;
    right: 0;
    z-index: 3;
    @media ${device.mobile} {
        display: none;
    }
`

export const AccentBlockSmall = styled(AccentBlock)`
    width: 9%;
    height: 25%;
    opacity: 30%;
    bottom: 0;
    right: 12.5%;
    z-index: 4;
    @media ${device.mobile} {
        display: none;
    }
`

export const OverlayCTATextContainer = styled(LargeCTATextContainer)`
    border-left: none;
    padding-left: 0;
`

export const LargeOverlayCTA = ({ header, description, theme }) => {
    return <>
        <Link to="/faq">
            <OverlayCTAContainer>
                <OverlaySquareBlock theme={theme} />
                <OverlayCTABlock theme={theme}>
                    <OverlayCTATextContainer theme={theme}>
                        <FullWidthFlexRow>
                            <CTALabel theme={theme}>{header}</CTALabel>
                        </FullWidthFlexRow>
                        <HANh2 color={theme.textColor}>{description}</HANh2>
                        <ArrowIconSVG color={theme.accentColor} />
                    </OverlayCTATextContainer>
                </OverlayCTABlock>
                <AccentBlock theme={theme} />
                <AccentBlockSmall theme={theme} />
            </OverlayCTAContainer>
        </Link>
    </>
}


export const StepsBlockContainer = styled.div`
    margin-top: 145px;
    @media ${device.tablet} {
        margin-top: 120px;
    }
    @media ${device.mobile} {
        margin-top: 80px;
    }
`

export const StepsGroupContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 70px auto 150px auto;
    @media ${device.tablet} {
        margin: 40px auto 150px auto;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        margin: 45px auto 100px auto;
    }
`

export const Step = styled.div`
    position: relative;
    width: 30%;
    height: 250px;
    @media ${device.tablet} {
        width: 100%;
        height: 200px;
    }
`

export const StepNumber = styled.h1`
    font-family: "URW DIN", sans-serif;
    font-size: 300px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 210px;
    color: ${yellow70};
    position: absolute;
    top: 0;
    left: 0;
    @media ${device.tablet} {
        font-size: 190px;
        line-height: 150px;
    }
    @media (max-width: 800px) {
        left: 15%;
    }
`

export const StepText = styled.div`
    position: absolute;
    width: 80%;
    top: 20%;
    right: 0;
    @media ${device.tablet} {
        top: 15%;
        right: auto;
        left: 33%;
        width: 60%;
    }
`

export const StepsBlock = ({ header, description, step1Header, step1Description, step2Header, step2Description, step3Header, step3Description }) => {
    return <>
        <StepsBlockContainer>
            <HANh2>{header}</HANh2>
            <HANbody>{description}</HANbody>
            <StepsGroupContainer>
                <Step>
                    <StepNumber>1</StepNumber>
                    <StepText>
                        <HANh3>{step1Header}</HANh3>
                        <HANbody>{step1Description}</HANbody>
                    </StepText>
                </Step>
                <Step>
                    <StepNumber>2</StepNumber>
                    <StepText>
                        <HANh3>{step2Header}</HANh3>
                        <HANbody>{step2Description}</HANbody>
                    </StepText>
                </Step>
                <Step>
                    <StepNumber>3</StepNumber>
                    <StepText>
                        <HANh3>{step3Header}</HANh3>
                        <HANbody>{step3Description}</HANbody>
                    </StepText>
                </Step>
            </StepsGroupContainer>
        </StepsBlockContainer>
    </>
}

export const StudentVentureHeroContainer = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
    @media ${device.mobile} {
        height: 100%;
    }

`

export const StudentVentureImage = styled.img`
    position: absolute;
    top: 0;
    right: -${DESKTOP_MARGIN};
    width: 60vw;
    height: 80vh;
    object-fit: cover;
    @media ${device.smLaptop} {
        right: -${LAPTOP_MARGIN};
        width: 70vw;
        height: 70%;
    }
    @media ${device.tablet} {
        right: -${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        position: relative;
        margin-top: 60px;
        right: unset;
        width: 100vw;
        margin-left: -${MOBILE_MARGIN};
        height: 350px;
    }
    
`

export const GrayBlock = styled.div`
    width: 45vw;
    position: absolute;
    bottom: 10vh;
    left: -106px;
    padding: 50px 60px 50px 100px;
    background-color: ${lightGray90};
    @media ${device.smLaptop} {
        left: -${LAPTOP_MARGIN};
        padding: 50px 60px 50px 120px;
        width: 80vw;
        bottom: 0;
    }
    @media ${device.tablet} {
        left: -${TABLET_MARGIN};
        padding: 45px 45px 45px 120px;
    }
    @media ${device.mobile} {
        position: relative;
        width: 100vw;
        top: -85px;
        bottom: unset;
        left: unset;
        padding: 50px ${MOBILE_MARGIN};
        margin-left: -${MOBILE_MARGIN};
        margin-bottom: -85px;
    }
`
export const GoldBar = styled.div`
    height: 7px;
    width: 280px;
    position: absolute;
    top: 90px;
    background-color: ${yellow};
    left: -${DESKTOP_MARGIN};
    @media ${device.smLaptop} {
        height: 5px;
        width: 200px;
        left: -${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        width: 150px;
        left: -${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        top: 30px;
        left: -${MOBILE_MARGIN};
    }
`

export const HeroTextContainer = styled.div`
    width: 100%;
    max-width: 470px;
    min-width: 440px;
    @media ${device.tablet} {
        max-width: 450px;
    }
    @media ${device.mobile} {
        max-width: 350px;
        min-width: unset;
    }
`

export const StudentVentureHero = ({ headline, description, image }) => {
    return <>
        <StudentVentureHeroContainer>
            <StudentVentureImage src={image.fluid.src}></StudentVentureImage>
            <GrayBlock>
                <GoldBar/>
                <HeroTextContainer>
                    <HANh1>{headline}</HANh1>
                </HeroTextContainer>
                <HANbody>{description}</HANbody>
            </GrayBlock>
        </StudentVentureHeroContainer>
    </>
}

