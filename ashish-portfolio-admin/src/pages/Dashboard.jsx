import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"

function Dashboard() {

  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

  const fetchProjects = async () => {
    try {

      const res = await API.get("/projects")

      setProjects(res.data)

    } catch (error) {
      console.error("Error fetching projects", error)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const deleteProject = async (id) => {

  const confirmDelete = window.confirm(
        "Are you sure you want to delete this project?"
    )

    if (!confirmDelete) return

    await API.delete(`/admin/projects/${id}`)

    fetchProjects()
 }

  const handleLogout = () => {

    localStorage.removeItem("adminToken")

    navigate("/")
  }

  return (
    <div className="p-10">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={() => navigate("/add-project")}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>

        <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
        >
        Logout
        </button>

      </div>

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Tech</th>
            <th className="p-3 border">Actions</th>
          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <tr key={project.id}>

              <td className="p-3 border">
                <img
                  src={project.imageUrl}
                  alt=""
                  className="w-20 h-12 object-cover"
                />
              </td>

              <td className="p-3 border">
                {project.title}
              </td>

              <td className="p-3 border">
                {project.techStack}
              </td>

              <td className="p-3 border flex gap-2">

                <button
                  onClick={() => navigate(`/edit-project/${project.id}`)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(project.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default Dashboard