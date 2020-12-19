import styled from "styled-components"
import { lightGray, darkGray, teal } from "../base/colors"

export const EmailInput = styled.input`
    border: 0;
    width: 80%;
    border-bottom: solid 2px ${lightGray};
    &:focus {
        outline: none;
        border-bottom: solid 2px ${teal};
        transition: border-bottom 0.3s;
    }
    padding: 2%;
    
`

export const SockForm = styled.form `
    width: 66%;
`

export const InputDiv = styled.div`
    width: 66%;
`

export const DefaultContainer = styled.div`
    width: 100%;
`