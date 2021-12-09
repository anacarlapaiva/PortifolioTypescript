import React from 'react'
import { Bt, Container } from './styles'

export interface ButtonProps {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return (
        <Container>
            <Bt onClick={onClick}> 
            {children}              
            </Bt>
        </Container>
    )
}

export default Button
