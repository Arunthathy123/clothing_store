import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Index from "./pages/Home/Index"
import Contact from "./pages/Contact/Contact"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Home" element={<Index />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
