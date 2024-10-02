import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RequestService from './pages/RequestService'
// import ClientDashboard from './pages/ClientDashboard'
// import AdminDashboard from './pages/AdminPanel'
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request-service" element={<RequestService />} />
          {/* <Route path="/client" element={<ClientDashboard />} /> */}
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
