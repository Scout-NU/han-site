import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { DESKTOP_MARGIN, MOBILE_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"

export const VentureBlockContainer = styled(BaseMarginContainer)`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    margin-top: 100px;
    margin-bottom: 100px;


    @media ${device.mobile} {
        height: fit-content;
        flex-flow: column wrap;
        margin: 50px 0px;
        padding: 0px ${MOBILE_MARGIN};
    }
`


export const VenturePicture = styled.img`
    flex: 1 1 50%;
    width: 50%;
    object-fit: cover;

    @media ${device.mobile} {
        width: 100%;
    }
`

export const VentureTextContainer = styled.div`
    flex: 1 1 50%;
    position: relative;
    background-color:  ${lightGray};
    margin-bottom: 30px;
    top: -30px;
    margin-left: -10vw;
    align-self: flex-start;
    padding: 40px;

    @media ${device.mobile} {
        width: 100vw;
        padding-top: 50px;
        top: 0;
        margin-bottom: 0px;
        margin-left: 0px;
        left: -${MOBILE_MARGIN};
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
    <VentureBlockContainer>
        <VenturePicture src="https://media.discordapp.net/attachments/336008480022593536/787599362753822720/taipei-taiwan-december-3-2018-people-ride-a-metro-train-in-taipei-taipei-mass-rapid-transit-mrt-bran.png"/>
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
    </VentureBlockContainer>
    </>  
}


export default ForVentureBlock