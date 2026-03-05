import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import API from "../services/api"

function EditProject() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [techStack, setTechStack] = useState("")
  const [githubLink, setGithubLink] = useState("")
  const [liveLink, setLiveLink] = useState("")

  const [imageFile, setImageFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const [loading, setLoading] = useState(false)

  // Fetch project data
  const fetchProject = async () => {

    try {

      const res = await API.get(`/projects/${id}`)

      const project = res.data

      setTitle(project.title)
      setDescription(project.description)
      setTechStack(project.techStack)
      setGithubLink(project.githubLink)
      setLiveLink(project.liveLink)

      setPreview(project.imageUrl)

    } catch (error) {

      console.error("Error fetching project", error)

    }

  }

  useEffect(() => {
    fetchProject()
  }, [])

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const formData = new FormData()

      formData.append("title", title)
      formData.append("description", description)
      formData.append("techStack", techStack)
      formData.append("githubLink", githubLink)
      formData.append("liveLink", liveLink)

      if (imageFile) {
        formData.append("image", imageFile)
      }

      await API.put(`/admin/projects/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      alert("Project updated successfully")

      navigate("/dashboard")

    } catch (error) {

      console.error("Update failed", error)
      alert("Failed to update project")

    } finally {

      setLoading(false)

    }

  }

  const handleImageChange = (e) => {

    const file = e.target.files[0]

    if (file) {

      setImageFile(file)
      setPreview(URL.createObjectURL(file))

    }

  }

  return (

    <div className="max-w-3xl mx-auto mt-10 bg-white shadow p-8 rounded-lg">

      <h2 className="text-3xl font-bold mb-6">
        Edit Project
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="Project Title"
          className="border p-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="border p-3 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tech Stack"
          className="border p-3 rounded"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
        />

        <input
          type="text"
          placeholder="GitHub Repository"
          className="border p-3 rounded"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
        />

        <input
          type="text"
          placeholder="Live Demo Link"
          className="border p-3 rounded"
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
        />

        <input
          type="file"
          onChange={handleImageChange}
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-40 rounded border"
          />
        )}

        <button
          disabled={loading}
          className="bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          {loading ? "Updating..." : "Update Project"}
        </button>

      </form>

    </div>
  )
}

export default EditProject