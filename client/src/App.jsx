import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RequestService from './pages/RequestService'
import AdminPanel from './pages/AdminPanel'
import ClientDashboard from './pages/ClientDashboard'
import GuardDashboard from './pages/GuardDashboard'
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request-service" element={<RequestService />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/guard" element={<GuardDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
