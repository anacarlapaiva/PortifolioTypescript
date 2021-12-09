import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Topo from './Sections/Banner'
import Sobre from './Sections/Sobre'
import Works from './Sections/Works'
import { Container } from './styles'

const Body = () => {
    return (
        <>
            <Header />
            <Container>                      
                <Topo />  
                <Sobre />               
                <Works />
            </Container>
            <Footer/>
        </>
    )
}

export default Body