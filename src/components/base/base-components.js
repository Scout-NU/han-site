import styled from "styled-components"
import { teal, navy, white } from "./colors"
import ArrowIconSVG from '../../images/arrowIcon'
import React from 'react';

export const Button = styled.button`
    border: 2.5px solid ${teal};
    color: ${navy};
    background-color: ${white};
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
    color: ${navy};
    background-color: ${white};
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 30px;
    letter-spacing: 1px;
    svg {
        margin-left: 5px;
        margin-bottom: 2px;
        width: 40px;
        height: 40px;
    }
    svg path {
        fill: ${white};
        transition: all 0.2s;
    }
    &:hover svg path{
        fill: ${teal};
    }
`

export const SecondaryButton = (props) => {
    const {text, children, ...rest } = props;
    return (
        <ArrowButton>
          {text}{' '}
          {children}
            <ArrowIconSVG/>
        </ArrowButton>
    );
  };