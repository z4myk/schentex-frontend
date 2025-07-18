import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../components/home/HomePage";
import { Navbar } from "../components/Navbar/Navbar";
import { Interlocks } from "../components/pages/Interlocks";
export const AppRouter = () => {
    return (
        <>
    <Navbar />        
        <Routes>

<Route path="/" element={<HomePage />} />
<Route path="/enclavamientos" element={<Interlocks />} />

        </Routes>



        </>
    )
}
