import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { teal, navy, white, lightGray, yellow } from "../base/colors"
import { device } from "../base/device"
import { HANbody, HANh2} from "../base/fonts"
import { BaseMarginContainer, SecondaryButton } from "../base/base-components"
import { MAX_Z_VALUE } from "../base/constants"
import { InvolvedBlockContainer, InvolvedPicture, InvolvedTextContainer } from "../get-involved-overview/get-involved-block"
import { InvolvedHeader } from "./get-involved-block"

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




const ForStudentBlock = ({header, description, image}) => {
    return <>
    <InvolvedBlockContainer>
        <InvolvedPicture src={image}/>
        <StudentTextContainer>
                <GoldBar/>
                <InvolvedHeader>{header}</InvolvedHeader>
                <HANbody>
                {description}
                </HANbody>
                <Link to="/get-involved/for-students">
                    <SecondaryButton>
                        Learn more
                    </SecondaryButton>
                </Link>
        </StudentTextContainer>
    </InvolvedBlockContainer>
    </>  
}


export default ForStudentBlock