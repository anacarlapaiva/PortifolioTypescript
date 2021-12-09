import React from 'react'
import {useNavigate} from 'react-router-dom'

import { Container, Content, Linha, Logo } from './styles'
import Img from '../../img/image.png'
import { Bt } from '../Button/styles' 


const Header = () => {
    const navigate = useNavigate()
    const toggleName = () =>{
        navigate('/formStep1')
    }     
    
    return (
        <Container >
            <Logo src={Img} />
            <Content>
                <Linha>
                Home
                </Linha>
                <Linha>
                Sobre
                </Linha>
            </Content>
            <Bt onClick={toggleName}>
                 contato
            </Bt>
        </Container>
    )
}

export default Header;
