import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { Box, Container, Form, TitleForm } from './styles'

export interface Props {
    onSubmit?: () => void;
}


const FormStep1: React.FC<Props> = ({ onSubmit }) => {
    return (
        <>
            <Header />
            <Container>
                <TitleForm>
                    Entre em Contato
                </TitleForm>
                <Box>
                    <Form onSubmit={onSubmit}>

                        <Input
                            name="name"
                            type="text"
                            labelText="Nome"
                        />
                        <Input
                            name="email"
                            type="email"
                            labelText="E-mail"
                        />

                        <Input
                            name="email"
                            type="email"
                            labelText="E-mail"
                        />

                        <Input
                            name="email"
                            type="email"
                            labelText="E-mail"
                        />

                    </Form>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default FormStep1
