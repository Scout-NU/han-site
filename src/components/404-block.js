import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { HANh1, HANsubh3 } from "./base/fonts"
import { BaseMarginContainer, Button } from "./base/base-components"
import { darkGray, yellow } from "./base/colors"
import { device } from "./base/device"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "./base/constants"


export const ErrorContainer = styled(BaseMarginContainer)`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media ${device.mobile} {
        flex-direction: column-reverse;
        margin-top: 60px;
    }
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;

    @media ${device.mobile} {
        align-items: center;
        text-align: center;
    }

`

export const ErrorImage = styled.img`
    width: 45vw;
    height: 45vw;
    object-fit: cover;
    padding: 30px;
    min-height: 300px;
    min-width: 300px;

    max-height: 500px;
    max-width: 500px;

`

export const SideGoldBar = styled.div`
    width: calc(${DESKTOP_MARGIN} - 40px);
    height: 4px;
    background-color: ${yellow};
    position: relative;
    left: -${DESKTOP_MARGIN};
    top: 45px;


    @media ${device.smLaptop} {
        width: calc(${LAPTOP_MARGIN} - 20px);
        left: -${LAPTOP_MARGIN};
    }

    @media ${device.tablet} {
        width: 25vw;
        top: -10px;
        left: -${TABLET_MARGIN};
    }

    @media ${device.mobile} {
        position: unset;
        width: 75vw;
        margin-bottom: 10px;
    }
`


const ErrorMessage = ({title, description, image}) => {
    return <ErrorContainer>
        <BodyContainer>
        <SideGoldBar/>
        <HANh1>{title}</HANh1>
        <HANsubh3 color={darkGray}>{description}</HANsubh3>
        <Link to={'/'}>
            <Button>Return Home</Button>
        </Link>
        </BodyContainer>
        <ErrorImage src={image}/>
    </ErrorContainer>
}

export default ErrorMessage