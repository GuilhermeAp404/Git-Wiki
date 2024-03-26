import React from 'react'

import {InputContainer} from './styles'

function Input(props) {
    return (
        <InputContainer>
            <input type = {props.type} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
        </InputContainer>
    )
}

export default Input