import React from 'react'
import banner from '../../../../img/banner.jpg'
import { Container, Banner, ContainerContent, Title, Subtitle } from './styles'

const BannerSection = () => {
    return (
        <Container>            
            <Banner src={banner} />
            
            <ContainerContent>
            <Title>
                Portifólio em Typescript
            </Title>
            <Subtitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit ratione ipsum autem aut facere incidunt, quas ex quis impedit atque ducimus vitae similique necessitatibus fuga quos tempore earum eveniet!
            </Subtitle>
        </ContainerContent>
        </Container>
    )
}

export default BannerSection
