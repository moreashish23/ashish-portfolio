import { motion } from "framer-motion";

const skills = [
  "React",
  "Redux Toolkit",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Spring Boot",
  "MySQL",
  "JWT Authentication",
  "REST APIs",
  "Git & GitHub",
  "Docker"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <div
                key={index}
                className="group bg-card/70 backdrop-blur-md 
                        p-4 md:p-6 
                        rounded-lg 
                        border border-gray-700 
                        hover:border-primary 
                        transition duration-300 
                        text-center 
                        cursor-pointer"
            >
                <p className="text-sm md:text-base font-medium text-gray-300 
                            transition duration-300 
                            group-hover:text-primary 
                            break-words">
                {skill}
                </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;