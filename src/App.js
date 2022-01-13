import React from 'react'
import Container from "./Container/Container";
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/auth/Auth';
import { Route, Routes } from "react-router-dom";


const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Container />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </>
    )
}

export default App
