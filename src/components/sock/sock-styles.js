import styled from "styled-components"
import { hintTextColor, darkGray, teal, yellow } from "../base/colors"
import { device } from "../base/device"

export const SockHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 140px;
    @media ${device.tablet} {
        margin-bottom: 30px;
        margin-top: 120px;
    }
    @media ${device.mobile} {
        margin-bottom: 40px;
        margin-top: 100px;
    }
`

export const GoldBar = styled.div`
    width: 15%;
    height: 7px;
    background-color: ${yellow};
    margin-bottom: 30px;
    @media ${device.tablet} {
        width: 25%;
    }
    @media ${device.mobile} {
        height: 5px;
        width: 33%;
    }
`

export const EmailInput = styled.input`
    border: 0;
    width: 80%;
    font-family: "Merriweather", sans-serif;
    margin-right: 2%;
    padding-left: 2%;
    font-size: 25px;
    line-height: 35px;
    font-style: italic;
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
        width: 100%;
        margin-bottom: 50px;
    }
    
`

export const SockForm = styled.form `
    display: flex;
    width: 66%;
    align-content: baseline;
    margin-bottom: 180px;
    margin-top: 50px;
    @media ${device.mobile} {
        flex-direction: column;
        width: 100%;
        margin-bottom: 80px;
    }
`