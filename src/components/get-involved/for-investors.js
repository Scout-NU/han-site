import React from "react"
import styled from "styled-components"
import { lightGray, darkGray, teal } from "../base/colors"
import { device } from "../base/device.js"

export const Hero = ({ image, headline, description}) => {
    return <>
        <h1>{headline}</h1>
        <p>{description}</p>
        <img src={image.fluid.src}></img>
    </>  
}

export const BenefitsBlock = ({ header, benefitsList}) => {
    return <>
        <h1>{header}</h1>
        {
            benefitsList.map(benefit => 
                <>
                    <p>{benefit.key}</p>
                    <p>{benefit.value.value}</p>
                </>)
        }
    </>  
}