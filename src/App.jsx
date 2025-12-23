import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import Services from "./pages/Plans.jsx"
import noiseImg from "./assets/Images/Noise.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="noise-bg" />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App