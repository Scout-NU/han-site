import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { yellow, navy, lightGray, darkGray, teal } from "../base/colors"
import { HANsubh3, HANh2 } from "../base/fonts"
import ArrowIconSVG from "../../images/arrowIcon"
import { device } from "../base/device.js"

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
    background-color: ${yellow};
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
    background-color: ${yellow};
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
    margin: 60px auto 60px 100px;
    border-left: 4px solid ${navy};
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
        margin-left: 20px;
        padding-left: 20px;
        border-left: 2px solid ${navy};
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
    margin: 0;
`

export const LargeCTA = ({ header, label, link }) => {
    return <>
        <Link to={link}>
            <LargeCTAContainer>
                <SquareBlock />
                <LargeCTABlock>
                    <LargeCTATextContainer>
                        <FullWidthFlexRow>
                            <CTALabel>{header}</CTALabel>
                        </FullWidthFlexRow>
                        <HANh2>{label}</HANh2>
                        <ArrowIconSVG />
                    </LargeCTATextContainer>
                </LargeCTABlock>
            </LargeCTAContainer>
        </Link>
    </>
}

export const LargeOverlayCTA = ({ header, description }) => {
    return <>
        <Link to="/faq">
            <p>{header}</p>
            <h2>{description}</h2>
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

