import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { lightGray, darkGray, teal } from "../base/colors"
import { device } from "../base/device.js"

export const LargeCTA = ({ header, label, link }) => {
    return <>
        <Link to={link}>
            <p>{header}</p>
            <h2>{label}</h2>
        </Link>
    </>
}

export const LargeOverlayCTA = ({ header, description}) => {
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

