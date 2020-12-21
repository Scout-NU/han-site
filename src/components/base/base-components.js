import styled from "styled-components"
import { teal, navy, white } from "./colors"
import ArrowIconSVG from '../../images/arrowIcon'
import React from 'react';
import { DESKTOP_MARGIN, LAPTOP_MARGIN, TABLET_MARGIN, MOBILE_MARGIN } from "./constants"
import { device, size } from "./device"

export const Button = styled.button`
    border: 2.5px solid ${teal};
    color: ${navy};
    background-color: transparent;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 30px;
    letter-spacing: 1px;
    transition: all 0.2s;
    &:hover {
        background-color: ${teal};
        color: ${white};
    }
    &:focus {
        background-color: ${teal};
        color: ${white};
    }
`

export const ArrowButton = styled.button`
    border: none;
    color: ${teal};
    background-color: transparent;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0px;
    letter-spacing: 1px;
    svg {
        margin-left: 5px;
        margin-bottom: 2px;
        width: 40px;
        height: 40px;
    }
    svg path {
        fill: transparent;
        transition: all 0.2s;
    }
    &:hover svg path{
        fill: ${teal};
    }
`

export const SecondaryButton = (props) => {
    const { text, children, ...rest } = props;
    return (
        <ArrowButton>
            {text}{' '}
            {children}
            <ArrowIconSVG />
        </ArrowButton>
    );
};

export const BaseMarginContainer = styled.div`
    max-width: ${size.desktop}px;
    margin-left: ${DESKTOP_MARGIN};
    margin-right: ${DESKTOP_MARGIN};
    @media ${device.smLaptop} {
        margin-left: ${LAPTOP_MARGIN};
        margin-right: ${LAPTOP_MARGIN};
    }
    @media ${device.tablet} {
        margin-left: ${TABLET_MARGIN};
        margin-right: ${TABLET_MARGIN};
    }
    @media ${device.mobile} {
        margin-left: ${MOBILE_MARGIN};
        margin-right: ${MOBILE_MARGIN};
    }
`