import React from 'react'
import styled from "styled-components"
import { SecondaryButton } from '../base/base-components'
import ChevronLeftIconSVG from '../../images/chevron-left'
import ChevronRightIconSVG from '../../images/chevron-right'
import CircleIconSVG from '../../images/circle'
import { teal, lightGray, navy, yellow70 } from "../base/colors"
import { HANdescription, HANh2, HANsmalldescription, HANsubh2, HANSpecialBody } from '../base/fonts'
import { MAX_Z_VALUE } from '../base/constants'
import { Link } from 'gatsby'


export const CarouselBox = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    margin: 0px 100px;
`

export const CarouselHeader = styled(HANh2)`
    position: absolute;
    top: 10vh;
`

export const TestimonialTextBox = styled.div`
    background-color: #FFCE69B3;
    padding: 40px 60px 40px 140px;
    position: absolute;
    top: 20vh;
    left: -140px;
    width: 75%;
    height: 40vh;
    z-index: ${MAX_Z_VALUE};
    align-items: center;
    display: flex;
`

export const TestimonialInfoBox = styled.div`
    padding: 40px 0px 0px 20px;
    border-left: 4px solid ${teal};
    position: absolute;
    top: 55vh;
    left: 10vw;
    z-index: ${MAX_Z_VALUE};
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
    width: 35vw;
    padding: 0px 50px;
`


export const CarouselDotList = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: inherit;
    padding: 0px 20%;
`

export const CarouselDot = styled.button`
    padding: 10px;
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


const Carousel = ({ carousel, carouselHeader }) => {
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


    return <CarouselBox>
        <CarouselHeader>{carouselHeader}</CarouselHeader>
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
            <Link to={carousel[index].name}>
                <SecondaryButton>
                    LinkedIn
                </SecondaryButton>
            </Link>
        </TestimonialInfoBox>

        <SpeakerImage src={carousel[index].profilePicture.file.url}/>
        <CarouselControl>
            <CarouselArrow onClick={leftClick}>
                <ChevronLeftIconSVG />
            </CarouselArrow>
            <CarouselDotList>
                {carousel.map((currElement, currIndex) =>
                    <CarouselDot onClick={() => setIndex(currIndex)} isActive={(currIndex == index)}>
                        <CircleIconSVG />
                    </CarouselDot>
                )}
            </CarouselDotList>
            <CarouselArrow onClick={rightClick}>
                <ChevronRightIconSVG />
            </CarouselArrow>
        </CarouselControl>
    </CarouselBox>

}

export default Carousel