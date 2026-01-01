import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Placeholder from "./pages/Placeholder.jsx"
import HomePage from "./pages/HomePage.jsx"
import Services from "./pages/Plans.jsx"

function App() {
  const [count, setCount] = useState(0)
  const goHome = () => {
    window.location.href = "/";
  }

  return (
    <>
    <div className="header">
      <div className="logoBannerWhite" onClick={goHome}/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Placeholder />} />
        <Route path="/dev" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App