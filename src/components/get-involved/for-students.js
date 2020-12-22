import React from "react"
import styled from "styled-components"
import { lightGray, darkGray, teal } from "../base/colors"
import { device } from "../base/device.js"

export const RequirementsBlock = ({ header, description}) => {
    return <>
        <h1>{header}</h1>
        <p>{description}</p>
    </>  
}