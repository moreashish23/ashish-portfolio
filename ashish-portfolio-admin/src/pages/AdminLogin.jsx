import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"

function AdminLogin() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {

      const response = await API.post("/auth/login", {
        username,
        password
      })

      localStorage.setItem("adminToken", response.data.token)

      navigate("/dashboard")

    } catch (error) {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default AdminLogin