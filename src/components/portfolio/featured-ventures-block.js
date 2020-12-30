import React from "react"
import styled from "styled-components"
import { SecondaryButton } from "../base/base-components"
import { teal, lightGray, yellow } from "../base/colors"
import { device, size } from "../base/device"
import { HANbody, HANh2, HANsubh2 } from "../base/fonts"
import {
    DESKTOP_MARGIN,
    LAPTOP_MARGIN,
    TABLET_MARGIN,
    MOBILE_MARGIN
} from '../base/constants'
import ChevronDownIconSVG from "../../images/chevron-down"
import { VentureImage } from './portfolio'

const FeaturedContainer = styled.div`
    background-color: ${lightGray};
    padding: 100px ${DESKTOP_MARGIN} 50px;
    position: relative;
    margin: 0px -${DESKTOP_MARGIN};
    @media ${device.smLaptop} {
        margin: 0px -${LAPTOP_MARGIN};
        padding: 100px ${LAPTOP_MARGIN} 50px;
    }
    @media ${device.tablet} {
        margin: 0px -${TABLET_MARGIN};
        padding: 75px ${TABLET_MARGIN} 0px;
    }
    @media ${device.mobile} {
        margin: 0px -${MOBILE_MARGIN};
        padding: 67px ${MOBILE_MARGIN} 0px;
    }

`

const GoldBar = styled.div`
    width: calc(${DESKTOP_MARGIN} - 40px);
    height: 5px;
    position: absolute;
    top: 130px;
    background-color: ${yellow};
    margin-left: -${DESKTOP_MARGIN};
    @media ${device.smLaptop} {
        margin-left: -${LAPTOP_MARGIN};
        width: calc(${LAPTOP_MARGIN} - 20px);
    }
    @media ${device.tablet} {
        margin-left: -${TABLET_MARGIN};
        top: 50px;
        width: 25vw;
    }
    @media ${device.mobile} {
        width: 33vw;
        top: 43px;
        margin-left: -${MOBILE_MARGIN};
    }
`

const FeaturedVentureImage = styled(VentureImage)`
    margin-bottom: 30px;
`

//dropdown

const VentureBlockContainer = styled.div`
    width: 28%;
    margin: 0px 2.5% 100px;
    @media ${device.mobile} {
        width: 45%;
        margin-bottom: 60px;
    }
    @media ${device.smMobile} {
        width: 100%;
    }
`

const VentureContainer = styled.div`
    display: flex;
    flex: row;
    flex-wrap: wrap;
    cursor: pointer;
`

const DescriptionControl = styled.div`
    margin-left: auto;
    display: none;
    @media ${device.mobile} {
        display: inline-block;
    }
`

const DropdownIcon = styled.div`
    display: inline;
    width: 100%;
    vertical-align: baseline;
    margin-left: 3px;
    transition: all 0.2s;
    svg {
        vertical-align: baseline;
        transition: all 0.2s;
        transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'none')};
    }
`

const DescriptionContainer = styled.div`
    @media ${device.mobile} {
        overflow: hidden;
        transition: all 0.2s;
        max-height: ${props => (props.isOpen ? '1000px' : '0px')};
    }
`

const TealBar = styled.div`
    display: none;
    @media ${device.mobile} {
        display: inline-block;
        height: 2px;
        background-color: ${teal};
        width: 100%;
    }
`

const VentureName = styled(HANsubh2)`
    margin: 0px; 
    margin-bottom: 20px;
    @media ${device.mobile} {
        margin-bottom: 10px;
    }
`

const VentureDescription = styled(HANbody)`
    margin-bottom: 20px;    
`

const Venture = ({ venture }) => {
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

    return <VentureBlockContainer>
        <FeaturedVentureImage src={venture.logo.fluid.src} />
        <VentureContainer onClick={e => setOpen(!open)} >
            <VentureName>{venture.name}</VentureName>
            <DescriptionControl isOpen={open}>
                <DropdownIcon isOpen={open}>
                    <ChevronDownIconSVG />
                </DropdownIcon>
            </DescriptionControl>
        </VentureContainer>
        <DescriptionContainer isOpen={open}>
            <VentureDescription>{venture.description.description}</VentureDescription>
            <a href={venture.website}>
                <SecondaryButton>Visit Website</SecondaryButton>
            </a>
        </DescriptionContainer>
        <TealBar />
    </VentureBlockContainer>

}

const VenturesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-top: 50px;
`

export const FeaturedVenturesBlock = ({ heading, ventures }) => {
    return <>
        <FeaturedContainer>
            <GoldBar />
            <HANh2>{heading}</HANh2>
            <VenturesContainer>
                {
                    ventures.map(venture =>
                        <Venture key={venture.name} venture={venture} />
                    )
                }
            </VenturesContainer>
        </FeaturedContainer>
    </>
}

