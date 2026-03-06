import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ProjectPreviewModal from "./ProjectPreviewModal ";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-18 px-6 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {loading
            ? skeletons.map((item) => (
                <div
                  key={item}
                  className="bg-card rounded-xl overflow-hidden border border-gray-700 animate-pulse"
                >
                  <div className="w-full h-52 bg-gray-700"></div>

                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
              ))

            : projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -6 }}
                  className="group bg-card rounded-xl overflow-hidden 
                             border border-gray-700 
                             hover:border-primary 
                             shadow-md hover:shadow-2xl 
                             transition duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-52 object-cover 
                                 group-hover:scale-110 
                                 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack
                        ?.split(",")
                        .slice(0, 3)
                        .map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs px-3 py-1 bg-background border border-gray-700 rounded-full text-gray-300"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}

        </div>

      </div>

      {/* Project Preview Modal */}
      <ProjectPreviewModal
        project={selectedProject}
        closeModal={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;