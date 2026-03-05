import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-24 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Ashish More. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">

          <a
            href="mailto:moreashishshivaji23@gmail.com"
            className="hover:text-primary transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/moreashish23"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/ashish-more-0651932a6/"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Linkedin size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;