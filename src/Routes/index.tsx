import React from 'react'
import { BrowserRouter  } from 'react-router-dom'
import Routes from './router'

const Route: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default Route
