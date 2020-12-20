import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { yellow, navy, white, lightGray, darkGray, teal } from "../base/colors"
import { HANsubh3, HANh2 } from "../base/fonts"
import ArrowIconSVG from "../../images/arrowIcon"
import { device } from "../base/device.js"

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
    margin: 60px auto 60px auto;
    width: 80%;
    height: 36vh;
    min-height: 120px;
    max-height: 290px;
    @media ${device.tablet} {
        height: 25vh;
        margin: 50px auto 50px auto;
    }
    @media ${device.mobile} {
        max-height: 190px;
        margin: 40px auto 40px auto;
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
    margin: 70px auto 140px auto;
    @media ${device.mobile} {
        height: 35vh;
        margin: 60px auto 100px auto;
    }
    @media ${device.mobile} {
        height: 25vh;
        margin: 45px auto 60px auto;
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
                <OverlaySquareBlock theme={theme}/>
                <OverlayCTABlock theme={theme}>
                    <OverlayCTATextContainer theme={theme}>
                        <FullWidthFlexRow>
                            <CTALabel theme={theme}>{header}</CTALabel>
                        </FullWidthFlexRow>
                        <HANh2 color={theme.textColor}>{description}</HANh2>
                        <ArrowIconSVG color={theme.accentColor} />
                    </OverlayCTATextContainer>
                </OverlayCTABlock>
                <AccentBlock theme={theme}/>
                <AccentBlockSmall theme={theme}/>
            </OverlayCTAContainer>
        </Link>
    </>
}

export const StepsBlock = ({ header, description, step1Header, step1Description, step2Header, step2Description, step3Header, step3Description }) => {
    return <>
        <h1>{header}</h1>
        <h3>{description}</h3>
        <p>1 {step1Header}</p>
        <p>{step1Description}</p>
        <p>2 {step2Header}</p>
        <p>{step2Description}</p>
        <p>3 {step3Header}</p>
        <p>{step3Description}</p>
    </>
}

export const VentureShowcase = ({ ventures }) => {
    return <>
        {
            ventures.map(venture =>
                <>
                    <h1>{venture.name}</h1>
                    <h3>{venture.shortTagline}</h3>
                    <a href={venture.website}>{venture.website}</a>
                    <img src={venture.logo.fluid.src}></img>
                </>)
        }

    </>
}

