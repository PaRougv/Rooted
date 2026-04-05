import React, { useEffect } from 'react'
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
import ScanHistoryPage from './components/ScanHistoryPage.jsx';
import Maps from './components/Maps.jsx';
import RuralFirstAid from './components/RuralFirstAid.jsx';
import ResultsAnalysis from './components/ResultsAnalysis.jsx';
import ChatBot from './components/ChatBot.jsx';
import Journal from './components/Journal.jsx';
import PlantSearch from './components/PlantSearch.jsx';
import PlantCompare from './components/PlantCompare.jsx';
import SeasonalCalendar from './components/SeasonalCalendar.jsx';
import EmergencyMode from './components/EmergencyMode.jsx';
import DosageCalculator from './components/DosageCalculator.jsx';
import Bookmarks from './components/Bookmarks.jsx';
import ProtectedRoutes from './Security/ProtectedRoutes.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import LanguageSelector from './components/LanguageSelector.jsx'
import OfflineBar from './components/OfflineBar.jsx';

const App = () => {
  useEffect(() => {
    const saved = localStorage.getItem("rooted-theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  return (
    <BrowserRouter>
      <OfflineBar />
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
        <Route path="/history" element={<ProtectedRoutes>
          <ScanHistoryPage />
        </ProtectedRoutes>}/>
        <Route path="/maps" element={<ProtectedRoutes>
          <Maps />
        </ProtectedRoutes>}/>
        <Route path="/first-aid" element={<ProtectedRoutes>
          <RuralFirstAid />
        </ProtectedRoutes>}/>
        <Route path="/results" element={<ProtectedRoutes>
          <ResultsAnalysis />
        </ProtectedRoutes>}/>
        <Route path="/chat" element={<ProtectedRoutes>
          <ChatBot />
        </ProtectedRoutes>}/>
        <Route path="/journal" element={<ProtectedRoutes>
          <Journal />
        </ProtectedRoutes>}/>
        <Route path="/plant-search" element={<ProtectedRoutes>
          <PlantSearch />
        </ProtectedRoutes>}/>
        <Route path="/compare" element={<ProtectedRoutes>
          <PlantCompare />
        </ProtectedRoutes>}/>
        <Route path="/calendar" element={<ProtectedRoutes>
          <SeasonalCalendar />
        </ProtectedRoutes>}/>
        <Route path="/emergency" element={<ProtectedRoutes>
          <EmergencyMode />
        </ProtectedRoutes>}/>
        <Route path="/dosage" element={<ProtectedRoutes>
          <DosageCalculator />
        </ProtectedRoutes>}/>
        <Route path="/bookmarks" element={<ProtectedRoutes>
          <Bookmarks />
        </ProtectedRoutes>}/>
      </Routes>
      <ThemeToggle />
      <LanguageSelector />
    </BrowserRouter>
  )
}

export default App
