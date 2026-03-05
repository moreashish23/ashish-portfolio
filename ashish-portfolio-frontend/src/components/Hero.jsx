import { motion } from "framer-motion";
import myImage from "../assets/ashish-image.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[100svh] flex items-center justify-center pt-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Ashish More</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
            Full Stack Developer building modern web applications using the MERN Stack 
            and Java Spring Boot, focused on scalable backend systems and responsive UI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* Resume Button */}
            <a
              href="/Ashish_More_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-6 py-3 rounded-lg
              hover:scale-105 hover:shadow-lg hover:shadow-primary/40
              transition duration-300 text-center"
            >
              View Resume
            </a>

            {/* Projects Button */}
            <a
              href="#projects"
              className="border border-accent px-6 py-3 rounded-lg 
              hover:bg-accent hover:text-black hover:scale-105
              transition duration-300 text-center"
            >
              View Projects
            </a>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-10 md:mt-0"
        >
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>

            {/* Floating Image */}
            <motion.img
              src={myImage}
              alt="Ashish"
              className="relative w-56 sm:w-72 md:w-96 rounded-2xl shadow-xl border border-card object-cover"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;