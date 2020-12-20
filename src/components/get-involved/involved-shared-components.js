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
    z-index: 1;
    width: 90%;
    height: 90%;
    background-color: ${yellow};
`

export const SquareBlock = styled.div`
    positon: absolute;
    z-index: 2;
    width: 30%;
    height: 82%;
    background-color: ${yellow};
    opacity: 30%;
`

export const LargeCTAContainer = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 270px;
`

export const LargeCTATextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 35px;
    margin-left: 100px;
    border-left: 4px solid ${navy};
`
export const FullWidthFlexRow = styled.div`
    flex: 1 1 100%;
`

export const HalfWidthFlexRow = styled.div`
    flex: 1 1 50%;
`

export const LargeCTA = ({ header, label, link }) => {
    return <>
        <Link to={link}>
            <LargeCTAContainer>
                <SquareBlock />
                <LargeCTABlock>
                    <LargeCTATextContainer>
                        <FullWidthFlexRow>
                            <HANsubh3>{header}</HANsubh3>
                        </FullWidthFlexRow>
                        <HalfWidthFlexRow>
                            <HANh2>{label}</HANh2>
                        </HalfWidthFlexRow>
                        <HalfWidthFlexRow>
                            <ArrowIconSVG/>
                        </HalfWidthFlexRow>
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

