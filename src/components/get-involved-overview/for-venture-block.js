import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { DESKTOP_MARGIN, MOBILE_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"
import { InvolvedBlockContainer, InvolvedPicture, InvolvedTextContainer } from "../get-involved-overview/get-involved-block"

export const VentureTextContainer = styled(InvolvedTextContainer)`
    background-color:  ${lightGray};
    margin-bottom: 30px;
    top: -30px;
    margin-left: -10vw;

    @media ${device.mobile} {
        padding-top: 50px;
        top: 0;
        margin-bottom: 0px;
        margin-left: 0px;
    }
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




const ForVentureBlock = () => {
    return <>
    <InvolvedBlockContainer>
        <InvolvedPicture src="https://media.discordapp.net/attachments/336008480022593536/787599362753822720/taipei-taiwan-december-3-2018-people-ride-a-metro-train-in-taipei-taipei-mass-rapid-transit-mrt-bran.png"/>
        <VentureTextContainer>
            <GoldBar/>
                <HANh2>JOIN HAN AS A VENTURE</HANh2>
                <HANbody>
                    Huntington Angels Network serves as a vehicle to connect Northeastern-affilated ventures with angel investors and VCs to help their growth. 
                </HANbody>
                <Link to="mem">
                    <SecondaryButton>
                        Learn more
                    </SecondaryButton>
                </Link>
        </VentureTextContainer>
    </InvolvedBlockContainer>
    </>  
}


export default ForVentureBlock