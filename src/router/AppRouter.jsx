import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Adaptability } from "../components/Adaptability";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/home/HomePage";
import { Navbar } from "../components/Navbar/Navbar";
import { Instalation } from "../components/pages/Instalation";
import { Interlocks } from "../components/pages/Interlocks";
import { Signaling } from "../components/pages/Signaling";
import { Wrapper } from "../Wrapper";
export const AppRouter = () => {
    return (
        <>
        {/* <Wrapper /> */}
    <Navbar />        
        <Routes>

<Route path="/" element={<HomePage />} />
<Route path="/enclavamientos/personalizacion" element={<Interlocks />} />
<Route path="/enclavamientos/adaptabilidad" element={<Adaptability/>} />
<Route path="/enclavamientos/senalizacion" element={<Signaling/>} />
<Route path="/enclavamientos/instalacion" element={<Instalation/>} />

        </Routes>
<Footer />


        </>
    )
}
