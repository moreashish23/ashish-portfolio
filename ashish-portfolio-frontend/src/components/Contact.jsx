import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together or just say hello.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-6">

            <a
                href="https://wa.me/919529956217"
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg cursor-pointer
                    hover:border-primary hover:-translate-y-1 hover:shadow-lg
                    transition duration-300 hover:text-primary"
                >
                <MessageCircle size={18} className="text-gray-300 group-hover:text-primary transition" />
                WhatsApp
          </a>

          {/* Email */}
          <a
                href="mailto:moreashishshivaji23@gmail.com?subject=Portfolio Inquiry"
                className="group flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg cursor-pointer
                    hover:border-primary hover:-translate-y-1 hover:shadow-lg
                    transition duration-300 hover:text-primary"
            >
            <Mail size={18} className="text-gray-300 group-hover:text-primary transition" />
            Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/moreashish23"
            target="_blank"
            className="group flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg cursor-pointer
                hover:border-primary hover:-translate-y-1 hover:shadow-lg
                transition duration-300 hover:text-primary"
          >
            <Github size={18} className="text-gray-300 group-hover:text-primary transition" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ashish-more-0651932a6/"
            target="_blank"
            className="group flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg cursor-pointer
                hover:border-primary hover:-translate-y-1 hover:shadow-lg
                transition duration-300 hover:text-primary"
          >
            <Linkedin size={18} className="text-gray-300 group-hover:text-primary transition" />
            LinkedIn
          </a>

          

        </div>

      </div>
    </section>
  );
};

export default Contact;