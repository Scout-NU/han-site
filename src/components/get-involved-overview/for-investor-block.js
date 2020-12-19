import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { DESKTOP_MARGIN, MOBILE_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"
import { InvolvedBlockContainer, InvolvedPicture, InvolvedTextContainer } from "../get-involved-overview/get-involved-block"


export const InvestorBlockContainer = styled(InvolvedBlockContainer)`
    flex-flow: row-reverse wrap;
`

export const InvestorTextContainer = styled(InvolvedTextContainer)`
    background-color:  ${yellow};
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
`


export const GoldBar = styled.div`
    width: 25vw;
    height: 4px;
    background-color: ${yellow};
    position: absolute;
    margin-top: 90px;
    right: -${DESKTOP_MARGIN};

    @media ${device.smLaptop} {
        right: -${LAPTOP_MARGIN};
    }


    @media ${device.tablet} {
        width: 20vw;
        margin-top: 70px;
        right: -${TABLET_MARGIN};
    }

    @media ${device.mobile} {
        width: 40vw;
        top: -40px;
        right: 0;
    }
`




const ForInvestorBlock = () => {
    return <>
    <InvestorBlockContainer>
        <InvolvedPicture src="https://www.evolo.us/wp-content/uploads/2019/04/0516-0.jpg"/>
        <InvestorTextContainer>
            <GoldBar/>
                <HANh2>JOIN HAN AS A VENTURE</HANh2>
                <HANbody>
                HAN provides strong deal flow curated to each investor in its network. We conduct diligence on these ventures to ensure they are investment-ready. We work with both angel investors and venture capital firms alike. 
                </HANbody>
                <Link to="mem">
                    <SecondaryButton>
                        Learn more
                    </SecondaryButton>
                </Link>
        </InvestorTextContainer>
    </InvestorBlockContainer>
    </>  
}


export default ForInvestorBlock