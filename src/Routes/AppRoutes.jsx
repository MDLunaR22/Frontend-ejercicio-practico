import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Formulario } from '../Pages/Formulario'

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/registros'} />}></Route>
                <Route path='registros' element={<Formulario />}></Route>
            </Routes>
        </>
    )
}
