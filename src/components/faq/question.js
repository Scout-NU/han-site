import React, { useState } from "react"
import styled from "styled-components"
import ChevronDownIconSVG from "../../images/chevron-down"
import linkedInIcon from "../../images/linkedIn.svg"
import { BaseMarginContainer } from "../base/base-components"
import { device, size } from "../base/device"
import { HANbody, HANsmalldescription, HANsubh3 } from "../base/fonts"
import { darkGray, teal } from "../base/colors"

export const QuestionBlockContainer = styled.div `
  margin-bottom: 50px;
 
`

export const QuestionText = styled(HANsubh3) `
  margin: 0px; 
  @media ${device.mobile} {
    margin-bottom: 1rem;
  }

`

export const QuestionContainer = styled.div `
  display: flex;
  flex: row;
`

export const DescriptionControl = styled.div `
  margin-left: auto;
  display: none;
  @media ${device.mobile} {
    display: inline-block;
  }
`

export const DropdownIcon = styled.div `
  display: inline;
  width: inherit;
  vertical-align: baseline;
  margin-left: 3px;
  transition: all 0.2s;
  svg {
    vertical-align: baseline;
    transition: all 0.2s;
    transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'none')};
  }
    
`

export const AnswerContainer = styled.div `
  @media ${device.mobile} {
    overflow: hidden;
    transition: all 0.2s;
    max-height: ${props => (props.isOpen ? '500px' : '0px')};
  }
    
`

export const TealBar = styled.div `
  display: none;
  @media ${device.mobile} {
    display: inline-block;
    height: 2px;
    margin-top: 25px;
    background-color: ${teal};
    width: 100%;
  }

`


const FaqQuestion = ({ faqQuestion }) => {
  //default open? check mobile if this is fine
  const [open, setOpen] = React.useState(true);
  const windowSize = typeof window !== 'undefined' && window.innerWidth;
  const [width, setWidth] = React.useState(windowSize);

  //for mobile openness
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    if (width > size.mobile) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }
  }, [width]);

  return <QuestionBlockContainer>
    <QuestionContainer onClick={e => setOpen(!open)}>
      <QuestionText>{faqQuestion.question}</QuestionText>
      <DescriptionControl isOpen={open}>
      <DropdownIcon isOpen={open}>
        <ChevronDownIconSVG />
      </DropdownIcon>
    </DescriptionControl>
    </QuestionContainer>
    <AnswerContainer isOpen={open}>
      <HANbody>{faqQuestion.answer.answer}</HANbody>
    </AnswerContainer>
    <TealBar/>
  </QuestionBlockContainer>

}

export default FaqQuestion

// export default ({ faqQuestion }) => (
//   <> 
//   {faqQuestion.question},
//   {faqQuestion.answer.answer}
//   </>
// )