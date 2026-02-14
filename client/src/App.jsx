import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx'
import HomePage from './components/HomePage.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Camera from './helpers/Camera.jsx';
import ProtectedRoutes from './Security/ProtectedRoutes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>}/>
        <Route path="/camera" element={<ProtectedRoutes>
          <Camera />
        </ProtectedRoutes>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
