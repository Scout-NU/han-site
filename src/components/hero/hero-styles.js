import styled from "styled-components"
import { lightGray, yellow } from "../base/colors"
import { device } from "../base/device.js"

export const HeroContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`

export const BlockContainer = styled.div`
    position: absolute;
    left: 100px;
    top: 80px;
    width: 55vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
@media ${device.tablet} {
    left: 0px;
    top: 80px;
    width: 80vw;
}
@media ${device.mobile} {
    align-items: start;
    top: 0px;
    width: 100vw;
}
`
export const GrayBlock = styled.div`
    background-color: ${lightGray};
    display: flex;
    align-items: center;
`

export const GoldBar = styled.div`
    background-color: ${yellow};
    height: 8px;
    width: 60%;
    margin-top: 5%;
    @media ${device.tablet} {
        height: 5px;
        margin-top: 7%;
        width: 50%;
    }
    @media ${device.mobile} {
        margin-top: 8%;
    }
`

export const TextContainer = styled.div`
    margin: 10%;
    @media ${device.tablet} {
        margin: 7%;
        margin-top: 9%;
    }
    @media ${device.mobile} {
        width: 60%;
    }
`

export const HeroImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 75vw;
    height: 66vh;
    object-fit: cover;
    filter: grayscale(100%);
    @media ${device.tablet} {
        height: 55vh;
    }
    @media ${device.mobile} {
        height: 50vh;
        width: 83vw;
    }
`

export const HANBoldText = styled.p`
    position: absolute;
    right: 0;
    top: 0;
    height: 95vh;
    writing-mode: vertical-rl; 
    transform: scaleX(-1) scaleY(-1); 
    font-size: 20vw;
    line-height: 15vw;
    opacity: 70%;
    text-transform: uppercase;
    color: ${yellow};
    font-weight: bold;
    z-index: 3;
    overflow: hidden;
    margin: 0;
    margin-right: 100px;
    @media ${device.tablet} {
        margin-right: 0px;
    }
    @media ${device.mobile} {
        height: 100vh;
        font-size: 30vw;
        line-height: 22.5vw;
    }
`

