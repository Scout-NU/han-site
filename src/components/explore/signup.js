import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, yellow30, lightGray, yellow, darkGray, hintTextColor } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh1, HANh2, HANsmalldescription, HANsubh3, HANsubh4 } from "../base/fonts"
import { BaseMarginContainer, Button, SecondaryButton } from "../base/base-components"
import { MOBILE_MARGIN, DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"

export const SignupBlockContainer = styled(BaseMarginContainer)`
    background-color: ${lightGray};
    margin-left: 0px;
    padding-right: 30px;
    padding-left: ${DESKTOP_MARGIN};
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    display: flex;
    flex-direction: row;

    @media ${device.smLaptop} {
        padding-left: ${LAPTOP_MARGIN};
    }

    @media ${device.tablet} {
        padding-left: ${TABLET_MARGIN};
        padding-top: 75px;
        padding-bottom: 75px;
    }

    @media ${device.mobile} {
        margin: 0;
        padding-left: ${MOBILE_MARGIN};
        flex-direction: column;
    }
`
export const SignupHeaderContainer = styled.div ` 
    width: 45%;
    @media ${device.mobile} {
        width: 100%;
        margin: 15px 0px;
    }
`

export const SignupDetails = styled.div ` 
    display: flex;
    width: 50%;
    flex-direction: column;
    padding-left: 30px;
    border-left: ${yellow} 4px solid;

    @media ${device.mobile} {
        width: 100%;
        padding-left: 0px;
        padding-top: 30px;
        border-left: none;
        border-top: ${yellow} 4px solid;
    }
`

export const SignupForm = styled.form `
    display: flex;
    flex-direction: column;
`

export const EmailInput = styled.input`
    font-family: "Merriweather", sans-serif;
    border: 0;
    width: 100%;
    margin: 25px 0px 50px 0px;
    padding-left: 2%;
    font-size: 25px;
    line-height: 35px;
    font-style: italic;
    background-color: transparent;
    border-bottom: solid 1px ${darkGray};
    ::placeholder {
        color: ${hintTextColor};
    }
    &:focus {
        outline: none;
        border-bottom: solid 1px ${teal};
        transition: border-bottom 0.5s;
    }
    @media ${device.tablet} {
        font-size: 20px;
        line-height: 30px;
      }
    
    @media ${device.mobile} {
        font-size: 15px;
        line-height: 25px;
    }
`

export const YellowBlock = styled.div `
    background-color: ${yellow30};
    width: 25%;
    height: 100px;
    position: absolute;
    bottom: -50px;
    right:  -${DESKTOP_MARGIN};

    @media ${device.smLaptop} {
        right:  -${LAPTOP_MARGIN};
      }

    @media ${device.tablet} {
        right:  -${TABLET_MARGIN};
        width: 125px;
     }
    
    @media ${device.mobile} {
        right:  0px;
        bottom: -40px;
        width: 100px;
        height: 80px;
    }
`


const VentureSignupBlock = ({ title, description }) => {
    return <SignupBlockContainer>
        <SignupHeaderContainer>
        <HANh2>{title}</HANh2>
        </SignupHeaderContainer>
        <SignupDetails>
            <HANsubh3 color={teal}>{description}</HANsubh3>
            <SignupForm action="https://formspree.io/f/xdopejzj" method="POST">
                <EmailInput placeholder="enter your email address" type="email" name="email"></EmailInput>
                <Button as="input" type="submit" name="submit" value="Sign up"></Button>
            </SignupForm>
        </SignupDetails>
        <YellowBlock/>
    </SignupBlockContainer>
}

export default VentureSignupBlock