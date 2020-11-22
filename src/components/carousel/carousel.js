import React from 'react'
import styled from "styled-components"
import { SecondaryButton } from '../base/base-components'
import ChevronLeftIconSVG from '../../images/chevron-left'
import ChevronRightIconSVG from '../../images/chevron-right'
import CircleIconSVG from '../../images/circle'
import { teal, lightGray } from "../base/colors"


export const CarouselBox = styled.div`
    background: ${lightGray};
    display: flex;
`

export const DirectionWrapper = styled.div`
    // width: 50%;
    // display: flex;
    // justify-content: flex-end;
`


export const CarouselHeader = styled.h1`

`

export const TestimonialText = styled.div`
    background-color: yellow;
`

export const SpeakerName = styled.div`
`

export const CompanyName = styled.div`
`

export const SpeakerImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    display: inline-block;
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

//What components to consider?
//TITLE -> BELIEVE IN HAN
//Speaksy
//Name
//Company Name
//Link
//Image
//Carosul
// - button
// - arrows

const Carousel = ({ carousel }) => {
    const maxIndex = carousel.length - 1;
    const [index, setIndex] = React.useState(0);
    const leftClick = () => {
        if(index > 0)  {
             setIndex(index - 1);
        } else {
            setIndex(maxIndex);
        }
    }

    const rightClick = () => {
        if(index < maxIndex)  {
            setIndex(index + 1);
       } else {
           setIndex(0);
       }
    }
   

   return <CarouselBox>
       <div>
    <CarouselHeader>Believe in HAN</CarouselHeader>
    <SecondaryButton>LinkedIn Link</SecondaryButton>
    <SpeakerName>Bunny the buny</SpeakerName>
    <CompanyName>Hibunny Daycare Inc.</CompanyName>
    <TestimonialText>{carousel[index]}</TestimonialText>
    </div>
    <div>
    <SpeakerImage src="https://cdn.discordapp.com/attachments/336008480022593536/775222795684282378/image0.jpg"/>
    <CarouselControl>
        <CarouselArrow onClick={leftClick}>
            <ChevronLeftIconSVG/>
        </CarouselArrow>
        <div>
        {carousel.map((currElement, currIndex) =>
            <CarouselDot onClick={() => setIndex(currIndex)} isActive={(currIndex == index)}>
                <CircleIconSVG/>
            </CarouselDot>
        )}
        </div>
            <CarouselArrow onClick={rightClick}>
                <ChevronRightIconSVG/>
            </CarouselArrow>
    </CarouselControl>
    </div>
    </CarouselBox>
}

export default Carousel