import { motion, AnimatePresence } from "framer-motion";

const ProjectPreviewModal = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card max-w-3xl w-full rounded-xl overflow-hidden border border-gray-700 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-3">
              {project.title}
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="bg-primary px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
                >
                  GitHub
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="border border-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-black transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectPreviewModal;