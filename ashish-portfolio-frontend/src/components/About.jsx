import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-lg mb-6"
        >
          I am a Full Stack Developer passionate about building secure,
          scalable, and production-ready web applications. I work primarily
          with the MERN Stack and Java Spring Boot to develop modern
          frontend interfaces and robust backend systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          I have also completed professional Java Full Stack training from
          Cyber Success, where I strengthened my understanding of REST APIs,
          authentication using JWT, database-driven applications, and clean
          architecture for scalable systems.
        </motion.p>

      </div>
    </section>
  );
};

export default About;