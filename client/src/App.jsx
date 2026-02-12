import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx'
import HomePage from './components/HomePage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App