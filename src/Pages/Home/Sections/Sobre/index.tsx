import React from 'react'
import  Button  from '../../../../components/Button'
import { About, AboutTitle, Container } from './styles'

const Sobre = () => {
    const toggleName = () =>{
    
    }
    
    return (
        <Container>
            <AboutTitle>
                Sobre mim
            </AboutTitle>

            <About>
            I'm 22 years old and I'm an undergraduate in Systems Analysis and Development. Currently working as a Front-end developer using React technologies | typescript
            </About>

            <Button onClick={toggleName}>
                Saiba mais
            </Button>
        </Container>
    )
}

export default Sobre
