import styled from "styled-components"
import { lightGray, yellow } from "../base/colors"
import { device } from "../base/device.js"

export const StatNumber = styled.p`
    font-weight: bold;
    font-size: 31px;
    font-family: URW DIN;
    @media ${device.tablet} {

    }
    @media ${device.mobile} {
        
    }
`

export const StatContainer = styled.div`
display: flex;
flex-direction: column;
@media ${device.mobile} {
    flex-direction: row;
}

`

export const GoldBar = styled.div`
    
    @media ${device.tablet} {
            
    }
`



