import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANdescription, HANh2, HANsmalldescription, HANsubh2 } from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { DESKTOP_MARGIN, MOBILE_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN, MAX_Z_VALUE } from "../base/constants"
import { InvolvedBlockContainer, InvolvedPicture, InvolvedTextContainer } from "../get-involved-overview/get-involved-block"

export const StudentTextContainer = styled(InvolvedTextContainer)`
    background-color:  ${lightGray};
    top: 40px;
    margin-left: -10vw;
    align-self: flex-end;

    @media ${device.mobile} {
        padding-top: 50px;
        top: 0;
        margin-bottom: 0px;
        margin-left: 0px;
    }
`


export const GoldBar = styled.div`
    width: 4px;
    height: -webkit-fill-available;
    margin: 60px 0px;
    z-index: ${MAX_Z_VALUE};
    background-color: ${yellow};
    position: absolute;
    top: 0px;
    left: -20px;

    @media ${device.mobile} {
        margin: 0px;
        left: 48px;
        top: -100px;
        height: 130px;
    }
`




const ForStudentBlock = () => {
    return <>
    <InvolvedBlockContainer>
        <InvolvedPicture src="https://media.discordapp.net/attachments/336008480022593536/787599362753822720/taipei-taiwan-december-3-2018-people-ride-a-metro-train-in-taipei-taipei-mass-rapid-transit-mrt-bran.png"/>
        <StudentTextContainer>
                <GoldBar/>
                <HANh2>JOIN HAN AS A VENTURE</HANh2>
                <HANbody>
                HAN provides a learning opportunity for students to get real-world experience in VC in which they source companies and meet with founders, conduct extensive diligence, and meet with investors
                HAN provides a learning opportunity for students to get real-world experience in VC in which they source companies and meet with founders, conduct extensive diligence, and meet with investors
                </HANbody>
                <Link to="mem">
                    <SecondaryButton>
                        Learn more
                    </SecondaryButton>
                </Link>
        </StudentTextContainer>
    </InvolvedBlockContainer>
    </>  
}


export default ForStudentBlock