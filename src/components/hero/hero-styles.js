import styled from "styled-components"
import { lightGray, darkGray, teal, yellow } from "../base/colors"
import { device } from "../base/device.js"

//add responsive
export const HeroGrid = styled.div`
margin-left: 100px;
margin-top: 140px;
display: grid;
grid-template-columns: repeat(13, 1fr);
grid-template-rows: repeat(8, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
@media ${device.tablet} {
    margin-left: 0px;
    margin-top: 100px;
}
@media ${device.mobile} {
    margin-left: 0px;
    margin-top: 0px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 1fr);
} 
`

export const GrayBlock = styled.div`
    background-color: ${lightGray};
    display: flex;
    align-items: center;
`

export const BlockContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
grid-area: 1 / 1 / 7 / 9;
z-index: 1;
@media ${device.tablet} {
    grid-area: 1 / 1 / 6 / 12;
}
@media ${device.mobile} {
    grid-area: 1 / 1 / 5 / 9;
    align-items: start;
}
`

export const HeroImage = styled.img`
    width: 100%;
    height: 65vh;
    object-fit: cover;
    align-self: end;
    grid-area: 2 / 4 / 9 / 14;
    filter: grayscale(100%);
    @media ${device.tablet} {
        grid-area: 4 / 4 / 9 / 14;
        height: 55vh;
    }
    @media ${device.mobile} {
        height: 33vh;
        grid-area: 3 / 3 / 6 / 9;
    }
`

export const TextContainer = styled.div`
    margin: 10%;
    @media ${device.mobile} {
        width: 60%;
    }
`

export const HANBoldText = styled.p`
    font-size: 200px;;
    opacity: 70%;
    text-transform: uppercase;
    color: ${yellow};
    z-index: 3;
    position: absolute;
    transform: rotate(-90deg) translate(0, -100%);
    transform-origin: 100% 0;
    right: 0;
    @media ${device.mobile} {
    }
`
// export const HANBoldContainer = styled.div`
//     align-self: end;
//     margin: 0px 0px 0px 0px;
//     grid-area: 3 / 11 / 9 / 13;
//     display: inline-block;
//     @media ${device.mobile} {
//         grid-area: 3 / 8 / 6 / 9;
//         justify-self: end;
//     }
// `

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
    }
`

export const HeroContainer = styled.div`
    position: relative;
    background-color:blue;

`