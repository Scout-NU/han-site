import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, yellow70 } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANh2} from "../base/fonts"
import { SecondaryButton } from "../base/base-components"
import { InvolvedBlockContainer, InvolvedHeader, InvolvedPicture, InvolvedTextContainer } from "./get-involved-block"


export const InvestorBlockContainer = styled(InvolvedBlockContainer)`
    flex-flow: row-reverse wrap;
`

export const InvestorTextContainer = styled(InvolvedTextContainer)`
    background-color:  ${yellow70};
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media ${device.mobile} {
        padding-top: 50px;
        top: 0;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: -50px;
    }
`


export const InvestorTextBox = styled.div`
    padding: 35px 0px;
    @media ${device.mobile} {
       padding: 0px;
    }
`


export const InvestorHeader = styled(InvolvedHeader)`
    margin-top: -70px;

    @media ${device.tablet} {
        margin-top: -63px;
    }
    @media ${device.mobile} {
        margin-top: 0px;
    }
`


export const GoldBar = styled.div`
    width: 25vw;
    max-width: 350px;
    height: 4px;
    background-color: ${teal};
    position: absolute;
    top: 60px;
    right: -180px;

    @media ${device.tablet} {
        top: 45px;
        right: -90px;
    }

    @media ${device.mobile} {
        width: 40vw;
        top: -40px;
        right: 0;
    }
`


const ForInvestorBlock = ({header, description, image}) => {
    return <>
    <InvestorBlockContainer>
        <InvolvedPicture src={image}/>
        <InvestorTextContainer>
            <GoldBar/>
                <InvestorHeader>{header}</InvestorHeader>
                <InvestorTextBox>
                <HANbody>
                 {description}
                </HANbody>
                <Link to="/get-involved/for-investors">
                    <SecondaryButton>
                        Learn more
                    </SecondaryButton>
                </Link>
                </InvestorTextBox>
        </InvestorTextContainer>
    </InvestorBlockContainer>
    </>  
}


export default ForInvestorBlock