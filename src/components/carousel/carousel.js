import React from 'react'
import styled from "styled-components"
import { SecondaryButton } from '../base/base-components'

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
`

export const ArrowButtony = styled.div`
    height: 30px;
    background-color: ${props => (props.isActive ? 'green' : 'red')};
    
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

    const moveTo = (newIndex) => {
        setIndex(newIndex);
    }

    const checker = (currIndex) => {
        return false;
    }

   
   
   return <>
    <CarouselHeader>Believe in HAN</CarouselHeader>
    <SecondaryButton>LinkedIn</SecondaryButton>
    <SpeakerName>Memes the Smeep</SpeakerName>
    <CompanyName>Hibunny Daycare Inc.</CompanyName>
    <TestimonialText>HI {carousel[index]}</TestimonialText>
    <SpeakerImage src="https://cdn.discordapp.com/attachments/336008480022593536/775222795684282378/image0.jpg"/>
    <div>Counter = {index}</div>


    <ArrowButtony onClick={leftClick}>lefty</ArrowButtony>
    <ArrowButtony onClick={rightClick}>right</ArrowButtony>

    {/* Only need carosel here? Everything else use index to get info! */}
    {carousel.map((currElement, currIndex) =>
        <ArrowButtony onClick={() => moveTo(currIndex)} isActive={(currIndex == index)}>
            {currElement}
        </ArrowButtony>
    )}




    
    <p>{carousel}</p>
    </>
}

export default Carousel