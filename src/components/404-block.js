import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { HANbody, HANdescription, HANh1, HANsubh3, HANsmalldescription, HANsubh2 } from "./base/fonts"
import { BaseMarginContainer, Button } from "./base/base-components"
import { darkGray } from "./base/colors"
import WherePicture from "../images/where.gif"

export const ErrorContainer = styled(BaseMarginContainer)`
    margin: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const ErrorImage = styled.img`
    width: 50vh;
    height: 50vh;
    object-fit: cover;
    padding: 30px;
`


const ErrorMessage = () => {
    return <ErrorContainer>
        <ErrorImage src={WherePicture}/>
        <BodyContainer>
        <HANh1>Whoops!</HANh1>
        <HANsubh3 color={darkGray}>This page does not exist!</HANsubh3>
        <Link to={'/'}>
            <Button>Return Home</Button>
        </Link>
        </BodyContainer>
    </ErrorContainer>
}

export default ErrorMessage