import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANh2 } from "../base/fonts"
import { SecondaryButton } from "../base/base-components"
import { DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN } from "../base/constants"
import { InvolvedBlockContainer, InvolvedHeader, InvolvedPicture, InvolvedTextContainer } from "../get-involved-overview/get-involved-block"

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
    max-width: 350px;
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




const ForVentureBlock = ({header, description, image}) => {
    return <>
    <InvolvedBlockContainer>
        <InvolvedPicture src={image}/>
        <VentureTextContainer>
            <GoldBar/>
                <InvolvedHeader>{header}</InvolvedHeader>
                <HANbody>
                    {description}
                </HANbody>
                <Link to="/get-involved/for-ventures">
                    <SecondaryButton>
                        Learn more
                    </SecondaryButton>
                </Link>
        </VentureTextContainer>
    </InvolvedBlockContainer>
    </>  
}


export default ForVentureBlock