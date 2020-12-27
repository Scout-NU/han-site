import styled from "styled-components"
import { device } from "./device"
import { navy , darkGray, black } from "./colors"

export const HANh1 = styled.h1`
  font-family: "URW DIN", sans-serif;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => (props.color ? props.color : navy)};

  @media ${device.tablet} {
    font-size: 60px;
    line-height: 76px;
  }

  @media ${device.mobile} {
    font-size: 50px;
    line-height: 66px;
  }
`

export const HANh2 = styled.h2`
    font-family: "URW DIN", sans-serif;
    text-transform: uppercase;
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 1px;
    font-weight: 600;
    color: ${props => (props.color ? props.color : navy)};

    @media ${device.tablet} {
        font-size: 35px;
        line-height: 45px;
      }
    
      @media ${device.mobile} {
        font-size: 30px;
        line-height: 35px;
      }
`

export const HANh3 = styled.h3`
    font-family: "URW DIN", sans-serif;
    font-size: 30px;
    line-height: 41px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => (props.color ? props.color : navy)};

    @media ${device.tablet} {
        font-size: 22px;
        line-height: 32px;
      }
    
    @media ${device.mobile} {
    font-size: 20px;
    line-height: 28px;
    }
`

export const HANh4 = styled.h4`
    font-family: "URW DIN", sans-serif;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => (props.color ? props.color : navy)};


    @media ${device.tablet} {
        font-size: 18px;
        line-height: 30px;
      }
    
    @media ${device.mobile} {
        font-size: 19px;
        line-height: 30px;
    }
`

export const HANsubh1 = styled.p`
  font-family: "Merriweather", sans-serif;
  font-size: 36px;
  font-style: italic;
  font-weight: 400;
  color: ${props => (props.color ? props.color : navy)};


  @media ${device.tablet} {
    font-size: 25px;
    line-height: 35px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 30px;
  }
`

export const HANsubh2 = styled.p`
    font-family: "Merriweather", sans-serif;
    font-size: 32px;
    line-height: 45px;
    font-style: italic;
    font-weight: 700;
  color: ${props => (props.color ? props.color : navy)};


    @media ${device.tablet} {
        font-size: 22px;
        line-height: 32px;
    }
    
    @media ${device.mobile} {
        font-size: 18px;
        line-height: 28px;
    }
`
export const HANsubh3 = styled.p`
    font-family: "Merriweather", sans-serif;
    font-size: 25px;
    line-height: 35px;
    font-style: italic;
    font-weight: 400;
    color: ${props => (props.color ? props.color : navy)};


    @media ${device.tablet} {
        font-size: 20px;
        line-height: 30px;
      }
    
    @media ${device.mobile} {
    font-size: 18px;
    line-height: 25px;
    }
`

export const HANsubh4 = styled.p`
    font-family: "Merriweather", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-style: italic;
    font-weight: 400;
    color: ${props => (props.color ? props.color : navy)};


    @media ${device.tablet} {
        font-size: 14px;
        line-height: 22px;
      }
    
    @media ${device.mobile} {
        font-size: 15px;
        line-height: 25px;
    }
`

export const HANbody = styled.p`
    font-family: "HK Grotesk", sans-serif;
    font-size: 18px;
    line-height: 29px;
    color: ${props => (props.color ? props.color : black)};
    

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 29px;
      }
    
    @media ${device.mobile} {
    font-size: 14px;
    line-height: 24px;
    }
`

export const HANSpecialBody = styled.p`
  font-family: "HK Grotesk", sans-serif;
  font-size: 22px;
  line-height: 34px;
  color: ${props => (props.color ? props.color : black)};


  @media ${device.tablet} {
    font-size: 18px;
    line-height: 33px;
  }
  @media ${device.mobile} {
    font-size: 16px;
    line-height: 30px;
  }
`

export const HANdescription = styled.p`
    font-family: "URW DIN", sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    color: ${props => (props.color ? props.color : darkGray)};


    @media ${device.tablet} {
        font-size: 18px;
        line-height: 30px;
      }
    
    @media ${device.mobile} {
      font-size: 16px;
      line-height: 30px;
    }
`

export const HANsmalldescription = styled.p`
    font-family: "URW DIN", sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${props => (props.color ? props.color : darkGray)};


    @media ${device.tablet} {
        font-size: 13px;
        line-height: 24px;
      }
    
    @media ${device.mobile} {
    font-size: 12px;
    line-height: 17px;
    }
`

