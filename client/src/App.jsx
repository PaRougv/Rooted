import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx'
import HomePage from './components/HomePage.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Camera from './helpers/Camera.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/camera" element={<Camera />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
