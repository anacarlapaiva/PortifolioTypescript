import React from 'react'
import { Container, Rodape, Navigation, Lista, Linha, Logo } from './styles'
import Img from '../../img/image.png'

const Footer = () => {
    return (
        <Container>
            <Rodape>
                <Navigation>
                    <Lista>
                        <Linha>
                            Home
                        </Linha>
                        <Logo src={Img} />
                        <Linha>
                            sobre
                        </Linha>
                    </Lista>
                </Navigation>
            </Rodape>
        </Container>
    )
}

export default Footer;
