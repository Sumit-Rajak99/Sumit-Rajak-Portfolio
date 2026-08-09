import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import car from "../assets/images/car_rentel.png";
import charmant from "../assets/images/charmant.png";
import sidSolution from "../assets/images/sid_solution.png";

const projects = [
  {
    title: "Car Rental Website",
    image: car,
    description:
      "A responsive car rental platform where users can explore available cars and rental options with a clean and modern interface.",
    tech: ["React", "Tailwind CSS", "JSON Server"],
    github: "https://github.com/Sumit-Rajak99/Car-Rental",
    demo: "#",
  },

  {
    title: "Charmant Website",
    image: charmant,
    description:
      "A modern and responsive website designed with an attractive user interface and smooth user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Sumit-Rajak99/Charmant-E-commerce",
    demo: "#",
  },

  {
    title: "Sid Solution",
    image: sidSolution,
    description:
      "A professional IT company website developed using Django with dynamic pages and a responsive frontend.",
    tech: ["Django", "Python", "HTML", "CSS"],
    github: "https://github.com/Sumit-Rajak99/IT-management-website",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h2>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* Project Image */}

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    <FaGithub />

                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    <FaExternalLinkAlt />

                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;