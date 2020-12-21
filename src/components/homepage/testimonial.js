import React from 'react'
import styled from "styled-components"
import { BaseMarginContainer, SecondaryButton } from '../base/base-components'
import ChevronLeftIconSVG from '../../images/chevron-left'
import ChevronRightIconSVG from '../../images/chevron-right'
import CircleIconSVG from '../../images/circle'
import { teal, yellow70 } from "../base/colors"
import { HANh2, HANsmalldescription, HANsubh2, HANSpecialBody } from '../base/fonts'
import { MAX_Z_VALUE, DESKTOP_MARGIN, TABLET_MARGIN, MOBILE_MARGIN, LAPTOP_MARGIN } from '../base/constants'
import { Link } from 'gatsby'
import { device } from "../base/device"


export const TestimonialContainer = styled(BaseMarginContainer)`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;

    @media ${device.mobile} {
        height: fit-content;
    }
`

export const TestimonialHeader = styled(HANh2)`
    position: absolute;
    top: 10vh;

    @media ${device.mobile} {
        position: unset;
        top: 18vh;
    }
`

export const TestimonialTextBox = styled.div`
    background-color: ${yellow70};
    position: absolute;
    padding: 40px 60px 40px 140px;
    top: 20vh;
    left: -${DESKTOP_MARGIN};
    width: 75%;
    height: 40vh;
    z-index: ${MAX_Z_VALUE};
    align-items: center;
    display: flex;

    @media ${device.smLaptop} {
        width: 70%;
        left: -${LAPTOP_MARGIN};
        padding-left: ${LAPTOP_MARGIN};
        top: 18vh;
    }

    @media ${device.tablet} {
        width: 70%;
        left: -${TABLET_MARGIN};
        padding-left: ${TABLET_MARGIN};
        top: 18vh;
    }

    @media ${device.mobile} {
        padding: 30px;
        position: relative;
        top: -8vh;
        left: -${MOBILE_MARGIN}; 
        width: 100vw;
        height: fit-content;
    }
`

export const TestimonialInfoBox = styled.div`
    padding: 40px 0px 0px 20px;
    border-left: 4px solid ${teal};
    position: absolute;
    top: 57vh;
    left: 10vw;
    z-index: ${MAX_Z_VALUE};

    @media ${device.tablet} {
        top: 55vh;
    }

    @media ${device.mobile} {
        position: relative;
        width: fit-content;
        left: 10vw;
        top: -10vh;
    }
`

export const TestimonialNameTag = styled.div`
    padding: 0px 0px 20px 0px;
    p {
        margin: 0;
    }
`

export const SpeakerImage = styled.img`
    position: absolute;
    width: 37vw;
    height: 69vh;
    object-fit: cover;
    right: 0;
    top: 10vh;
    max-width: 550px;
    @media ${device.tablet} {
        top: 18vh;
        height: 57vh;
    }

    @media ${device.mobile} {
        position: unset;
        width: 100%;
    }
`

export const CarouselArrow = styled.button` 
    border: none;
    background: none;
    &:focus {
        outline: none;
    }
    svg {
        fill: transparent;
        transition: all 0.2s;
    }
    &:hover svg {
        fill: ${teal};
    }

`

export const CarouselControl = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    position: absolute;
    bottom: 10vh;
    right: 0;
    width: 37vw;
    max-width: 550px;

    @media ${device.tablet} {
        bottom: 14vh;
    }

    @media ${device.mobile} {
        bottom: 6vh;
        position: relative;
        width: 100%;
    }
`


export const CarouselDotList = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const CarouselDot = styled.button`
    padding: 15px;
    border: none;
    background: none;
    outline: none;

    &:focus {
        outline: none;
    }

    svg {
        fill:  ${props => (props.isActive ? teal : 'transparent')};
        transition: all 0.2s;
    }

    &:hover svg {
        fill: ${teal};
    }
`


const Testimonial = ({ carousel, carouselHeader }) => {
    const maxIndex = carousel.length - 1;
    const [index, setIndex] = React.useState(0);
    const leftClick = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(maxIndex);
        }
    }

    const rightClick = () => {
        if (index < maxIndex) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }


    return <TestimonialContainer>
        <TestimonialHeader>{carouselHeader}</TestimonialHeader>
        <SpeakerImage src={carousel[index].profilePicture.fluid.src}/>
        <TestimonialTextBox>
            <HANSpecialBody>
                {carousel[index].testimonial.testimonial}
            </HANSpecialBody>
        </TestimonialTextBox>
        <TestimonialInfoBox>
            <TestimonialNameTag>
                <HANsubh2>{carousel[index].name}</HANsubh2>
                <HANsmalldescription>{carousel[index].company}</HANsmalldescription>
            </TestimonialNameTag>
            <Link to={carousel[index].companyWebsite}>
                <SecondaryButton>
                    Website
                </SecondaryButton>
            </Link>
        </TestimonialInfoBox>
        <CarouselControl>
            <CarouselArrow onClick={leftClick}>
                <ChevronLeftIconSVG />
            </CarouselArrow>
            <CarouselDotList>
                {carousel.map((currElement, currIndex) =>
                    <CarouselDot key={currIndex} onClick={() => setIndex(currIndex)} isActive={(currIndex == index)}>
                        <CircleIconSVG />
                    </CarouselDot>
                )}
            </CarouselDotList>
            <CarouselArrow onClick={rightClick}>
                <ChevronRightIconSVG />
            </CarouselArrow>
        </CarouselControl>
    </TestimonialContainer>

}

export default Testimonial