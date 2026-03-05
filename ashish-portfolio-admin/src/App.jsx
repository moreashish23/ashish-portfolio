import { BrowserRouter, Routes, Route } from "react-router-dom"

import AdminLogin from "./pages/AdminLogin"
import Dashboard from "./pages/Dashboard"
import AddProject from "./pages/AddProject"
import EditProject from "./pages/EditProject"
import ProtectedRoute from "./utils/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/add-project" element={<ProtectedRoute><AddProject /></ProtectedRoute>} />
        <Route path="/edit-project/:id" element={<ProtectedRoute><EditProject /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App