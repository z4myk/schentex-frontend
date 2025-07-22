import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Estilos
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Scripts con dependencias (como Popper)

function App() {

  return (
    <>
   <BrowserRouter>
   <AppRouter />
   </BrowserRouter>
    </>
  )
}

export default App
