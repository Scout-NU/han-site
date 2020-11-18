import styled from "styled-components"
import { navy , white } from "./colors"

export const HANh1 = styled.h1`
  font-family: "URW DIN", sans-serif;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${navy};

  @media (max-width: 975px) {
    display: none
  }
  @media (max-width: 1200px) {
    width: 700px;
  }
`

export const HANh2 = styled.h2`
    font-family: "URW DIN", sans-serif;
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 1px;
    font-weight: 700;
    color: ${navy};
`

export const HANh3 = styled.h3`
    font-family: "URW DIN", sans-serif;
    font-size: 30px;
    line-height: 41px;
    letter-spacing: 1px;
    font-weight: 500;
    color: ${navy};
`

export const HANh4 = styled.h4`
    font-family: "URW DIN", sans-serif;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 2px;
    font-weight: 500;
    color: ${navy};
`

export const HANbody = styled.p`
    font-family: "HK Grotesk", sans-serif;
    font-size: 18px;
    line-height: 29px;
`

export const HANsubh1 = styled.p`
  font-family: "Merriweather", sans-serif;
  font-size: 36px;
  font-style: italic;
  font-weight: 400;
`

export const HANsubh2 = styled.p`
    font-family: "Merriweather", sans-serif;
    font-size: 32px;
    line-height: 45px;
    font-style: italic;
    font-weight: 700;
`
export const HANsubh3 = styled.p`
    font-family: "Merriweather", sans-serif;
    font-size: 25px;
    line-height: 35px;
    font-style: italic;
    font-weight: 400;
`