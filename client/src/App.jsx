import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx'
import HomePage from './components/HomePage.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Camera from './helpers/Camera.jsx';
import PlantDetails from './components/PlantDetails.jsx';
import PlantSafetyCheck from './components/PlantSafetyCheck.jsx';
import PlantSafetyResult from './components/PlantSafetyResult.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import ProtectedRoutes from './Security/ProtectedRoutes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/dashboard" element={<ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>}/>
        <Route path="/camera" element={<ProtectedRoutes>
          <Camera />
        </ProtectedRoutes>}/>
        <Route path="/plant-safety" element={<ProtectedRoutes>
          <PlantSafetyCheck />
        </ProtectedRoutes>}/>
        <Route path="/plant-safety-result" element={<ProtectedRoutes>
          <PlantSafetyResult />
        </ProtectedRoutes>}/>
        <Route path="/plant" element={<ProtectedRoutes>
          <PlantDetails />
        </ProtectedRoutes>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
