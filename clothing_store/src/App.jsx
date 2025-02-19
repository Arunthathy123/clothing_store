import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Index from "./pages/Home/Index"
import Contact from "./pages/Contact/Contact"
import { PopupProvider } from "./context/PopupProvider"
import Uniforms from "./pages/ProductDetails/ListProductsByCategory"

function App() {

  return (
    <PopupProvider>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Home" element={<Index />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Uniform" element={<Uniforms />} />
        
      </Routes>
    </PopupProvider>
  )
}

export default App
