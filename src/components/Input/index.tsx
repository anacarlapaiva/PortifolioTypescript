import React from 'react'
import {Container, LabelForm, InputForm} from './styles'

interface Props {
    labelText: string;
    name: string;
    type: string;
}

const Input: React.FC<Props> = ({labelText, name, type}) => {
    return (
        <Container>
            <LabelForm htmlFor={name}>{labelText}</LabelForm>
            <InputForm
            name={name}
            type={type}
            />
        </Container>
    )
}

export default Input;
