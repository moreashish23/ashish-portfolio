import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detect current section while scrolling
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // If user is at very top
      if (window.scrollY < 200) {
        setActiveSection("hero");
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom Slow Smooth Scroll
  const slowScrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarOffset = 80;
    const targetPosition = section.offsetTop - navbarOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 700;

    let start = null;

    const animation = (currentTime) => {
      if (!start) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (id) => {
    slowScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-card/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => slowScrollTo("hero")}
          className="text-2xl font-bold text-primary cursor-pointer"
        >
          Ashish<span className="text-accent">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base font-medium">

          <button
            onClick={() => slowScrollTo("hero")}
            className={`transition ${
              activeSection === "hero"
                ? "text-primary"
                : "hover:text-primary"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => slowScrollTo("about")}
            className={`transition ${
              activeSection === "about"
                ? "text-primary"
                : "hover:text-primary"
            }`}
          >
            About
          </button>

          <button
            onClick={() => slowScrollTo("skills")}
            className={`transition ${
              activeSection === "skills"
                ? "text-primary"
                : "hover:text-primary"
            }`}
          >
            Skills
          </button>

          <button
            onClick={() => slowScrollTo("projects")}
            className={`transition ${
              activeSection === "projects"
                ? "text-primary"
                : "hover:text-primary"
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => slowScrollTo("contact")}
            className={`transition ${
              activeSection === "contact"
                ? "text-primary"
                : "hover:text-primary"
            }`}
          >
            Contact
          </button>

        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
              size={28}
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
              size={28}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-card/80 backdrop-blur-lg border-t border-gray-700 shadow-xl">
          <div className="flex flex-col items-center py-6 space-y-6 text-lg font-medium">

            <button onClick={() => handleClick("hero")} className="hover:text-primary transition">
              Home
            </button>

            <button onClick={() => handleClick("about")} className="hover:text-primary transition">
              About
            </button>

            <button onClick={() => handleClick("skills")} className="hover:text-primary transition">
              Skills
            </button>

            <button onClick={() => handleClick("projects")} className="hover:text-primary transition">
              Projects
            </button>

            <button onClick={() => handleClick("contact")} className="hover:text-primary transition">
              Contact
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;