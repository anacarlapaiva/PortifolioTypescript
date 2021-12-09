import React from 'react'

import { Route, Routes as ListRoutes} from "react-router-dom";

import Home from "../Pages/Home";
import FormStep1 from '../Pages/FormStep1'; 
import FormStep2 from '../Pages/FormStep2'; 

const Routes = () => { 
    return (
        <ListRoutes>            
            <Route path="/" element={<Home />} /> 
            <Route path="/formStep1" element={<FormStep1 />} /> 
            <Route path="/formStep2" element={<FormStep2 />} /> 
        </ListRoutes>
    )
}

export default Routes
