import styled from "styled-components"
import { teal, navy, white } from "./colors"

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
    transition: background-color 0.2s, color 0.2s;
    &:hover {
        background-color: ${teal};
        color: ${white};
    }
    &:focus {
        background-color: ${teal};
        color: ${white};
    }
`

export const SecondaryButtonIcon = styled.img`
    width: 25px;
    height; 25px;
    stroke: ${navy};
    &:hover {
        fill: ${teal};
    }
`
export const SecondaryButton = styled.button`
    background-style: none;
    color: ${navy};
    background-color: ${white};
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 30px;
    letter-spacing: 1px;
`