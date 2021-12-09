import React, { useEffect, useState } from 'react'
import api from '../../../../Services/api'
import { AboutTitle } from '../Sobre/styles'
import { Container, Row } from './styles'

type ListPhotosProps = {
    description: string,
    id: string,
    likes: number,
    linkDownload: string,
    instaUser: string
}

const Works: React.FC = () => {
    const [listPhotos, setListPhotos] = useState<ListPhotosProps[]>([])

    const getPhotos = async (): Promise<any> => {
        const { data } = await api.get('photos')

        const updateListFromApi = data.map(
            (dataPhoto: any): ListPhotosProps => {
                return {
                    description: dataPhoto.alt_description,
                    id: dataPhoto.id,
                    likes: dataPhoto.likes,
                    linkDownload: dataPhoto.links.download,
                    instaUser: dataPhoto.user.instagram_username
                }
            }
        )
        setListPhotos(updateListFromApi)
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return listPhotos.length > 0 ? (
        <Container>
            <AboutTitle>
                    Trabalhos
                </AboutTitle>
            <Row>
                
                {
                    listPhotos.map(
                        photo => (
                            <img key={photo.id} src={photo.linkDownload} alt={photo.description} />
                        )
                    )
                }

            </Row>
        </Container>
    ) : null
}

export default Works
